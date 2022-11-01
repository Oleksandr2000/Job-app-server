import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Advertisement, AdvertisementDocument } from './advertisements.schema';

@Injectable()
export class AdvertisementsService {

    constructor(@InjectModel(Advertisement.name) private advertisementModel: Model<AdvertisementDocument>,
               ) {}

    
    async getAll(count, offset) {
        const amount = await this.advertisementModel.count();
        const res = await this.advertisementModel.find().skip(Number(offset)).limit(Number(count));
        return { items: res, amount};
    }

    async getOne(id: ObjectId): Promise<Advertisement> {
        const res = await this.advertisementModel.findById(id);
        return res;
    }
}