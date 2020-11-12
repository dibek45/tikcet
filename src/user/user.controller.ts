import { Controller, Post,Request, Res, HttpStatus, Body, Get, Param, NotFoundException, Delete, Query, Put, UseGuards, forwardRef, Inject } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { UsersService } from './user.service';

@Controller('user')
export class UserController {

  constructor(  private _user:UsersService, private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {

    console.log("entra aqui primero")
   return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('getUser')
  async getUser(@Res() res,@Body() body,) {
    const user = await this._user.findByNumberPhone(body.telefono);
    if (!user) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json(user);
  
  }

  
 
}

    
