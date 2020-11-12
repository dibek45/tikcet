import { Injectable } from '@nestjs/common';

import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { Config } from "./interface/config.interface"
import { CreateConfigDTO } from "./dto/config.dto";

@Injectable()
export class ConfigService {

    constructor(@InjectModel('config') private readonly configModel: Model<Config>) {}

    // Get all configs
    async getconfigs(): Promise<Config[]> {
        const configs = await this.configModel.find();
        return configs;
    }
    
    // Get a single config
    async getconfig(configID: string): Promise<Config> {
        const config = await this.configModel.findById(configID); 
        return config;
    }

    // Post a single config
    async createconfig(createconfigDTO: any): Promise<Config> {
        const newconfig = new this.configModel(createconfigDTO);
        return newconfig.save();
    }

    // Delete config
    async deleteconfig(configID:string): Promise<Config> {
        const deleteconfig =  await this.configModel.findByIdAndDelete(configID)
        return deleteconfig;
       
       }

    // Put a single config
    async updateconfig(configID: string, createconfigDTO: CreateConfigDTO): Promise<Config> {
        const updatedconfig = await this.configModel
                            .findById(configID, createconfigDTO);
        return updatedconfig;
    }

}