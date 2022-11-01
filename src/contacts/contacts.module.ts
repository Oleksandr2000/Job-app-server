import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactsController } from './contacts.controller';
import { Contact, ContactSchema } from './contacts.schema';
import { ContactsService } from './contacts.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Contact.name, schema: ContactSchema}]),
  ],
  controllers: [ContactsController],
  providers: [ContactsService]
})
export class ContactsModule {}
