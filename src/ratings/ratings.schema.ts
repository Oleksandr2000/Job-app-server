import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import * as mongoose from 'mongoose';

export type RatingDocument = Rating & Document;

@Schema()
export class Rating {
    @Prop()
    value: number;

    @Prop()
    advertisement: mongoose.Types.ObjectId;

    @Prop()
    user: mongoose.Types.ObjectId;
}

export const RatingSchema = SchemaFactory.createForClass(Rating);