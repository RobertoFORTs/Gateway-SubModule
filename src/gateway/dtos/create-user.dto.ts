import { ApiProperty } from '@nestjs/swagger';
import { Frequency } from '../enums/frequency';

export class CreateUserDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ enum: Frequency, required: true })
  frequency: Frequency;

  @ApiProperty()
  city: string;

  @ApiProperty()
  stateCode: string;

  @ApiProperty()
  countryCode: string;

  @ApiProperty()
  zip: string;
}
