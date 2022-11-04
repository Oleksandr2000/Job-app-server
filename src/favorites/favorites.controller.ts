import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { addToFavoriteDto } from './add-favorited.dto';
import { FavoriteService } from './favorites.service';

@Controller('favorite')
export class FavoriteController {
    constructor(private favoriteService: FavoriteService) {}

    @Post('/add')
    toglleFavorite(@Body() ratingDto: addToFavoriteDto) {
        return this.favoriteService.toglleFavorite(ratingDto)
    }

    @Get()
    getAllFavorite( @Query('id') id: any,
                    @Query('count') count: number,
                    @Query('offset') offset: number){
        return this.favoriteService.getFavorite(id, count, offset);
    }
}
