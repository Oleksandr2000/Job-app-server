import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Advertisement, AdvertisementDocument } from 'src/advertisements/advertisements.schema';
import { CreateRatingDto } from './create-ratings.dto';
import { Rating, RatingDocument } from './ratings.schema';

@Injectable()
export class RatingService {

    constructor(@InjectModel(Rating.name) private ratingModel: Model<RatingDocument>,
                @InjectModel(Advertisement.name) private advertisementModel: Model<AdvertisementDocument>,){}


    async setRating (dto: CreateRatingDto) {

        const isSetRating = await this.ratingModel.findOne({advertisement: dto.advertisement, user: dto.user});

        if(!isSetRating){
            await this.ratingModel.create({...dto});


        }

        if(isSetRating){
           await this.ratingModel.findOneAndUpdate(
            {advertisement: dto.advertisement, user: dto.user},
            {value: dto.value});
        }

        const count = await this.ratingModel.count({advertisement: dto.advertisement});

        const courseRating = await this.ratingModel.find({advertisement: dto.advertisement});

        const currentRating = courseRating.map(item => item.value).reduce((sum, item) => sum + item, 0) / count; 

        const rating = {
            value: currentRating,
            count: count
        }

       const advertisement = await this.advertisementModel.findOneAndUpdate(
            {
                _id: dto.advertisement
            },
            {
                rating: rating
            })

            const response = {
                data: advertisement,
                message: isSetRating ? "Ви змінили оцінку" : "Оцінка збережена"
            }

            return response;
    }
}
