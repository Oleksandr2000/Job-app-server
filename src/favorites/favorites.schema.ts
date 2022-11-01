import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import * as mongoose from 'mongoose';

export type FavoriteDocument = Favorite & Document;

@Schema()
export class Favorite {

    @Prop()
    advertisement: mongoose.Types.ObjectId;

    @Prop()
    user: mongoose.Types.ObjectId;
}

export const FavoriteSchema = SchemaFactory.createForClass(Favorite);