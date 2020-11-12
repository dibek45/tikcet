import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
export type User = any;

@Injectable()
export class UsersService {
    private readonly users: User[];

    constructor(@InjectModel('User') private readonly userModel: Model<User>) {
        this.users = [
          {
            userId: 1,
            username: 'Fernanda',
            password: '159159',
          },
          {
            userId: 2,
            username: 'chris',
            password: 'secret',
          },
          {
            userId: 3,
            username: 'maria',
            password: 'guess',
          },
        ];
      }
    
      async findOne(username: string): Promise<User | undefined> {
        console.log("*enrea correo")
        return await this.userModel.findOne({"correo": username });
      }

      async findByNumberPhone(telefono: string): Promise<User | undefined> {
        const user= await this.userModel.findOne({"telefono": telefono }); 
        if (user=={}) {
          const user = new this.userModel({"telefono": telefono });
             await user.save();
          
        }
        return user;
      }
}
