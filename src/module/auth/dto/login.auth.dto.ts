import { IsEmail, IsNotEmpty, MinLength, MaxLength } from 'class-validator';
import { User } from '../interfaces/user.interface';

export class LoginAuthDto implements User {

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(25)
  password: string;

}