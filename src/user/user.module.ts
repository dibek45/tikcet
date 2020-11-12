import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthPhoneModule } from 'src/auth/auth.module';
import { UserSchema } from './shema/user.shema';
import { UserController } from './user.controller';
import { UsersService } from './user.service';

@Module({
  imports:[AuthPhoneModule,MongooseModule.forFeature([{name:'User', schema:UserSchema}])],
  providers: [UsersService],
  controllers:[UserController],
  exports: [UsersService]
})
export class UsersModule {}
