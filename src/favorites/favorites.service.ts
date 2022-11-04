import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Advertisement, AdvertisementDocument } from 'src/advertisements/advertisements.schema';
import { addToFavoriteDto } from './add-favorited.dto';
import { Favorite, FavoriteDocument } from './favorites.schema';

@Injectable()
export class FavoriteService {
    constructor(
        @InjectModel(Favorite.name) private favoriteModel: Model<FavoriteDocument>,
        @InjectModel(Advertisement.name) private advertisementModel: Model<AdvertisementDocument>,){}


    async toglleFavorite (dto: addToFavoriteDto) {

        const existFavorite = await this.favoriteModel.findOneAndDelete({user: dto.user, advertisement: dto.advertisement});

        if(existFavorite){
            throw new HttpException('Видалено з обраних', HttpStatus.OK);
        }

        const favorite = await this.favoriteModel.create({...dto})

        return favorite;
    }

    async getFavorite (id: any, count: number, offset: number){
        const amount = await this.favoriteModel.count({user: id});
        const favoriteId = await this.favoriteModel.find({user: id});

        const favoritesIdArray = favoriteId.map(item => item.advertisement);

        const favorites = await this.advertisementModel.find({_id: favoritesIdArray}).skip(Number(offset * count)).limit(Number(count));;

        return { items: favorites, amount};
    }
}
