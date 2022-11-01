import { Controller, Get, Param, Query } from '@nestjs/common';
import { AdvertisementsService } from './advertisements.service';
import { ObjectId } from 'mongoose';

@Controller('advertisements')
export class AdvertisementsController {
    constructor(private advertisementService: AdvertisementsService) {    }

    @Get()
    getAll(@Query('count') count: number,
           @Query('offset') offset: number) {
        return this.advertisementService.getAll(count, offset)
    }

    @Get(':id')
    getOne(@Param('id') id: ObjectId) {
        return this.advertisementService.getOne(id);
    }
}


