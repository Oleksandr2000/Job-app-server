import { Body, Controller, Post } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { createContactsDto } from './create-contacts.dto';

@Controller('contacts')
export class ContactsController {
    constructor(private contactsService: ContactsService) {    }

    @Post('/save')
    saveContacts(@Body() dto: createContactsDto) {
        return this.contactsService.saveContacts(dto)
    }
}
