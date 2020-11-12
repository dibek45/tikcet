import { Controller, Post, Res, HttpStatus, Body, Get, Param, NotFoundException, Delete, Query, Put } from '@nestjs/common';
import { CategoryService } from "./category.service";

import { CreatecategoryDTO } from "./dto/category.dto";

@Controller('category')
export class categoryController {

    constructor(private categoryService: CategoryService) { }

    // Add category: /category/create
    @Post('/create')
    async createcategory(@Res() res, @Body() createcategoryDTO: any) {
        const category = await this.categoryService.createcategory(createcategoryDTO);
        return res.status(HttpStatus.OK).json({
            message: 'category Successfully Created',
            category
        });
    }

    // Get categorys /category
     @Get('/list')
    async getcategorys(@Res() res) {
        const categorys = await this.categoryService.getcategorys();
        return res.status(HttpStatus.OK).json(categorys);
    }

    @Get('/listcategoryWithProducts')
    async getcategorysByCategory(@Res() res) {
        const categorys = await this.categoryService.getcategorysByCategory();
        return res.status(HttpStatus.OK).json(categorys);
    }

    // GET single category: /category/5c9d46100e2e5c44c444b2d1
    @Get('/geyOnly/:_id')
    async getcategory(@Res() res, @Param('_id') categoryID) {
        console.log("pasa por singular")
        const category = await this.categoryService.getcategory(categoryID);
        if (!category) throw new NotFoundException('category does not exist!');
        return res.status(HttpStatus.OK).json(category);
    }

    

    // GET categorys by category
    @Get('/geyOnly/:_id')
    async getcategoryByCategory(@Res() res, @Param('_id') categoryID) {
        const category = await this.categoryService.getcategory(categoryID);
        if (!category) throw new NotFoundException('category does not exist!');
        return res.status(HttpStatus.OK).json(category);
    }

    // Delete category: /delete?categoryID=5c9d45e705ea4843c8d0e8f7
    @Delete('/delete')
    async deletecategory(@Res() res, @Query('categoryID') categoryID) {
        const categoryDeleted = await this.categoryService.deletecategory(categoryID);
        if (!categoryDeleted) throw new NotFoundException('category does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'category Deleted Successfully',
            categoryDeleted
        });
    }

    // Update category: /update?categoryID=5c9d45e705ea4843c8d0e8f7
    @Put('/update')
    async updatecategory(@Res() res, @Body() createcategoryDTO: CreatecategoryDTO, @Query('categoryID') categoryID) {
        const updatedcategory = await this.categoryService.updatecategory(categoryID, createcategoryDTO);
        if (!updatedcategory) throw new NotFoundException('category does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'category Updated Successfully',
            updatedcategory 
        });
    }

}