import { IsBoolean, IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

import { IsPhoneNumberWithCountryCodes } from 'src/core/database/decorators/phone-number.decorator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsOptional()
  @IsDate()
  deletedAt?: Date;

  @IsOptional()
  @IsBoolean()
  isVerified?: boolean;

  @IsOptional()
  @IsDate()
  lastLoggedInAt?: Date;

  @IsOptional()
  @IsString()
  fullName?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsPhoneNumberWithCountryCodes([
    { countryCode: '1', length: 11 }, // Example: Country code 1 (e.g., USA) with length 11
    { countryCode: '44', length: 12 }, // Example: Country code 44 (e.g., UK) with length 12
    { countryCode: '40', length: 12 }, // Romania (country code 40) with length 12
  ])
  phoneNumber?: string;

  @IsOptional()
  @IsString()
  token?:string
}
