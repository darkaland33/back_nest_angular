import { Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login.auth.dto';

@Injectable()
export class AuthService {

  login(credenciales: LoginAuthDto) {
    return {
      mensaje: 'Login exitoso',
      email: credenciales.email,
    };
  }

}