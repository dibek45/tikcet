import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { ModuleRef } from '@nestjs/core';

@Injectable()
export class AuthService {
  private usersService: UsersService;
  constructor( private moduleRef: ModuleRef, private jwtService: JwtService
    ) {}

    onModuleInit() {
      this.usersService = this.moduleRef.get(UsersService);
    }
  async validateUser(username: string, pass: string): Promise<any> {
    const letra = username.substring(0, 1);
    if (letra == '+' ) {
      console.log("Entra por telefono");
      const user = await this.validateUserByPhone(username);  
      if (user) {
        const { ...result } = user;
        return result;
      }   
    }else{
      console.log("por correo")
      const user = await this.usersService.findOne(username);
      if (user && user.password === pass) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    }

   
  }


  async validateUserByPhone(phone: string): Promise<any> {

    const user = await this.usersService.findByNumberPhone(phone);
      const { ...result } = user;
      console.log(result);
      return result;
  }

  async login(user: any) {
    console.log('----****************************'+JSON.stringify(user._doc))
    const payload = { username: user._doc.name, sub: user._doc._id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }


  async logOut(user: any) {
    
  }
}