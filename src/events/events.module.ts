import { Module } from '@nestjs/common';
import { ProductService } from 'src/product/product.service';
import { TicketModule } from 'src/tiket/ticket.module';
import { EventsGateway } from './events.gateway';

@Module({
  imports:[TicketModule], 
   providers: [EventsGateway],
})
export class EventsModule {}