import { Body, Controller, Post } from '@nestjs/common';
import { RegisterAuthDto } from './dto/resgister-auth.dto';

@Controller('auth')
export class AuthController {
  @Post('register')
  registerUser(@Body() userObj: RegisterAuthDto) {
    return {
      email: userObj.email,
      name: userObj.name,
    };
  }
}