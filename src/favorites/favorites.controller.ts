import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { addToFavoriteDto } from './add-favorited.dto';
import { FavoriteService } from './favorites.service';

@Controller('favorite')
export class FavoriteController {
    constructor(private favoriteService: FavoriteService) {}

    @Post('/add')
    toglleFavorite(@Body() ratingDto: addToFavoriteDto) {
        return this.favoriteService.toglleFavorite(ratingDto)
    }

    @Get(':id')
    getAllFavorite(@Param('id') id: any){
        return this.favoriteService.getFavorite(id);
    }
}
