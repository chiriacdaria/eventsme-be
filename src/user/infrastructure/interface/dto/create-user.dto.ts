import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { IsPhoneNumberWithCountryCodes } from 'src/core/database/decorators/phone-number.decorator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}