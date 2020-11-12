import { Injectable } from '@nestjs/common';

import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { category } from "./interface/category.interface"
import { CreatecategoryDTO } from "./dto/category.dto";

@Injectable()
export class CategoryService {

    constructor(@InjectModel('category') private readonly categoryModel: Model<category>) {}

    // Get all categorys
    async getcategorys(): Promise<category[]> {
        const categorys = await this.categoryModel.find();
        return categorys;
    }

     // Get all categorys by category
     async getcategorysByCategory(): Promise<category[]> {
        const categorias = await this.categoryModel.aggregate([
            { $match : { empresaID : 1 }},
             {$lookup:
                {
                 from: 'products',
                 localField: 'categori_id',
                 foreignField: 'categories._id',
                 as: 'products'
                }
              }
            ]);
        return categorias;
    }
    
    // Get a single category
    async getcategory(categoryID: string): Promise<category> {
        const category = await this.categoryModel.findById(categoryID); 
        return category;
    }

    // Post a single category
    async createcategory(createcategoryDTO: any): Promise<category> {
        const newcategory = new this.categoryModel(createcategoryDTO);
        return newcategory.save();
    }

    // Delete category
    async deletecategory(categoryID:string): Promise<category> {
        const deletecategory =  await this.categoryModel.findByIdAndDelete(categoryID)
        return deletecategory;
       
       }

    // Put a single category
    async updatecategory(categoryID: string, createcategoryDTO: CreatecategoryDTO): Promise<category> {
        const updatedcategory = await this.categoryModel.findById(categoryID, createcategoryDTO);
        return updatedcategory;
    }

}