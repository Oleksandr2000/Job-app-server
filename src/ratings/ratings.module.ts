import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Advertisement, AdvertisementSchema } from 'src/advertisements/advertisements.schema';
import { RatingController } from './ratings.controller';
import { Rating, RatingSchema } from './ratings.schema';
import { RatingService } from './ratings.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Rating.name, schema: RatingSchema}]),
    MongooseModule.forFeature([{name: Advertisement.name, schema: AdvertisementSchema}]),

  ],
  controllers: [RatingController],
  providers: [RatingService]
})
export class RatingModule {}
