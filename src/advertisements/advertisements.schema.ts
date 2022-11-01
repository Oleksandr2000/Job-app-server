import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AdvertisementDocument = Advertisement & Document;

@Schema()
export class Advertisement {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  title: string;

  @Prop()
  salary: string;

  @Prop()
  address: string;

  @Prop([String])
  benefits: string[];

  @Prop({type: Object})
  location: {
      lat: number,
      long: number
  };

  @Prop()
  pictures: string[];

  @Prop([String])
  createdAt: string;

  @Prop()
  updatedAt: string;

  @Prop()
  description: string;

  @Prop([String])
  employment_type: string[];

  @Prop({type: Object})
  rating: {
    value: number,
    count: number,
  }

}

export const AdvertisementSchema = SchemaFactory.createForClass(Advertisement);