import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import * as mongoose from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    password: string;

    @Prop()
    name: string;
    

    @Prop()
    email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);