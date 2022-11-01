import { ObjectId } from "mongoose";

export class createContactsDto {
    readonly name: string;
    readonly email: string;
    readonly number: string;
    readonly advertisement: ObjectId;
}