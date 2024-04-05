import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { IsPhoneNumberWithCountryCodes } from 'src/core/database/decorators/phone-number.decorator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  //@IsString()
  //@IsNotEmpty()
  //firstName: string;

  //@IsString()
  //@IsNotEmpty()
  //lastName: string;

  @IsString()
  @MinLength(8)
  password: string;

  //@IsPhoneNumberWithCountryCodes([
  //  { countryCode: '1', length: 11 },
  //  { countryCode: '44', length: 12 }, 
  //  { countryCode: '40', length: 12 }, 
  //])
  //phoneNumber: string;
}
