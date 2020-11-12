import { Module } from '@nestjs/common';
import { categoryController } from './category.controller';
import { CategoryService } from './category.service';
import { MongooseModule } from "@nestjs/mongoose";
import { categorySchema  } from "./schemas/category.schema";

@Module({ 
  imports: [MongooseModule.forFeature([{name:'category', schema:categorySchema}])],
  controllers: [categoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
