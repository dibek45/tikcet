import { Controller,Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException } from '@nestjs/common';

//import {createconfigDTO} from "./dto/config.dto";
import { ConfigService } from './config.service';


@Controller('config')
export class ConfigController {

    constructor(private configService: ConfigService) { }

    @Get('/geyOnly/:_id')
    async getConfig(@Res() res, @Param('_id') configID) {
        console.log("pasa por singular")
        const config = await this.configService.getconfig(configID);
        if (!config) throw new NotFoundException('config does not exist!');
        return res.status(HttpStatus.OK).json(config);
    }
    

/*
    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteconfig(params.id);
    }
*/



@Post('/create')
async createConfig(@Res() res, @Body() createConfigDTO: any) {
    const config = await this.configService.createconfig(createConfigDTO);
    return res.status(HttpStatus.OK).json({
        message: 'Config Successfully Created',
        config
    });
}


}
