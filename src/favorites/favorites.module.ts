import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Advertisement, AdvertisementSchema } from 'src/advertisements/advertisements.schema';
import { FavoriteController } from './favorites.controller';
import { Favorite, FavoriteSchema } from './favorites.schema';
import { FavoriteService } from './favorites.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Favorite.name, schema: FavoriteSchema}]),
    MongooseModule.forFeature([{name: Advertisement.name, schema: AdvertisementSchema}]),
  ],
  controllers: [FavoriteController],
  providers: [FavoriteService]
})
export class FavoriteModule {}
