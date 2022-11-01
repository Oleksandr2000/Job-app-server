import { ObjectId } from "mongoose";


export class addToFavoriteDto {
    readonly advertisement: ObjectId;
    readonly user: ObjectId;
}