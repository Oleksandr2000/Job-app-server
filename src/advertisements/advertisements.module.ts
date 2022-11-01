import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdvertisementsController } from './advertisements.controller';
import { Advertisement, AdvertisementSchema } from './advertisements.schema';
import { AdvertisementsService } from './advertisements.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Advertisement.name, schema: AdvertisementSchema}]),
],
  controllers: [AdvertisementsController],
  providers: [AdvertisementsService]
})
export class AdvertisementsModule {}
