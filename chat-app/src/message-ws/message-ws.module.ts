import { Module } from '@nestjs/common';
import { MessagesWsService } from './message-ws.service';
import { MessagesWsGateway } from './message-ws.gateway';
import { AuthModule } from 'src/auth/auth.module';
import { MessageService } from './message.service';
import { MessageW } from './entities/message-w.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [],
  providers: [MessagesWsGateway, MessagesWsService, MessageService],
  imports: [
    TypeOrmModule.forFeature([MessageW]),
    AuthModule]
})
export class MessageWsModule { }
