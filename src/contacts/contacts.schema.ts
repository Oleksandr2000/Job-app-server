import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type ContactDocument = Contact & Document;

@Schema()
export class Contact {
    
    @Prop()
    name: string;
    
    @Prop()
    number: string;
    
    @Prop()
    email: string;

    @Prop()
    advertisement: mongoose.Types.ObjectId;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);