import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './create-user.dto';
import { User, UserDocument } from './users.schema';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,
                                        private jwtService: JwtService ){};

                                        
    async registration (userDto: CreateUserDto) {
         
        const existUser = await this.userModel.findOne({email: userDto.email});

        if (existUser) {
            throw new HttpException('Користувач існує', HttpStatus.BAD_REQUEST);
        }

        const salt = await bcrypt.genSalt(4);

        const passwordHash = await bcrypt.hash(userDto.password, salt);
        
        const user = await this.userModel.create({
            name: userDto.name,
            email: userDto.email,
            password: passwordHash,
        });
        
        const token = await this.generateToken(user);

        const res = {
            user: {...user},
            token: token.token,

        }
        return res;
    }
    
    
    
    async login(userDto: CreateUserDto) {
        const user = await this.userModel.findOne({email: userDto.email}).exec();
        const passwordEquals = await bcrypt.compare(userDto.password, user.password);
        if (!user || !passwordEquals) {
            throw new UnauthorizedException({message: 'Невірні данні'});
        }

        const token = await this.generateToken(user);
        
        const res = {
            user: {...user},
            token: token.token,

        }
        return res;
    }

    private async generateToken(user: any) {
        const payload = {email: user.email}
        return {
            token: this.jwtService.sign(payload)
        }
    }
}
