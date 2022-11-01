import { Body, Controller, Post } from '@nestjs/common';
import { CreateRatingDto } from './create-ratings.dto';
import { RatingService } from './ratings.service';

@Controller('ratings')
export class RatingController {
    constructor(private ratingService: RatingService) {}

    @Post('/add')
    setRating(@Body() ratingDto: CreateRatingDto) {
        return this.ratingService.setRating(ratingDto)
    }
}
