import { ObjectId } from "mongoose";

export class CreateRatingDto {
    readonly value: number;
    readonly advertisement: any;
    readonly user: ObjectId;
}