import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketService } from './ticket.service';
import { TicketSchema  } from "./schemas/ticket.schema";
import { TicketController } from './ticket.controller';


@Module({
  imports: [MongooseModule.forFeature([{name:'Ticket', schema:TicketSchema}])],
  controllers:[TicketController],
  providers: [TicketService],
  exports:[TicketService]
})
export class TicketModule {}
