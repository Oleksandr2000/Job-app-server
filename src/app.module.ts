import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import { AdvertisementsModule } from './advertisements/advertisements.module';
import { UsersModule } from './users/users.module';
import { FavoriteModule } from './favorites/favorites.module';
import { RatingModule } from './ratings/ratings.module';
import { ContactsModule } from './contacts/contacts.module';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.hfofisu.mongodb.net/jobs?retryWrites=true&w=majority'),
        AdvertisementsModule,
        UsersModule,
        FavoriteModule,
        RatingModule,
        ContactsModule,
    ],
    providers: [],
    controllers: []
})
export class AppModule {}
