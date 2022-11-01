import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contact, ContactDocument } from './contacts.schema';
import { createContactsDto } from './create-contacts.dto';

@Injectable()
export class ContactsService {
    constructor(@InjectModel(Contact.name) private contactModel: Model<ContactDocument>) {}

    async saveContacts(dto: createContactsDto){
        const contact = await this.contactModel.create({...dto});

        return contact
    }
}
