import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MessageW } from './entities/message-w.entity';

@Injectable()
export class MessageService {
    constructor(
        @InjectRepository(MessageW)
        private readonly messageRepository: Repository<MessageW>
    ) { }

    async saveMessage(clientId: string, message: string): Promise<MessageW> {
        const newMessage = this.messageRepository.create({ clientId, message });
        return await this.messageRepository.save(newMessage);
    }
}
