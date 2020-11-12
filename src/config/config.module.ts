import { Module } from '@nestjs/common';
import { ConfigController } from './config.controller';
import { ConfigService } from './config.service';
import { MongooseModule } from "@nestjs/mongoose";
import {ConfigSchema  } from "./schemas/config.schema";

@Module({ 
  imports: [MongooseModule.forFeature([{name:'config', schema:ConfigSchema}])],
  controllers: [ConfigController],
  providers: [ConfigService]
})
export class ConfigModule {}
