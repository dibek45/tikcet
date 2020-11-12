import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule } from './config/config.module';
import { CategoryModule } from './category/category.module';
import { UsersModule } from './user/user.module';
import { TicketModule } from './tiket/ticket.module';
import { EventsModule } from './events/events.module';


@Module({
  imports: [
    UsersModule,
    ProductModule,
    ConfigModule,
    CategoryModule, 
    EventsModule,
    MongooseModule.forRoot('mongodb://localhost/shop', {useNewUrlParser:true} ),
     TicketModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
