import { ApiProperty } from '@nestjs/swagger';

export class ClimateResponseDto {
  constructor(
    city?: string,
    stateCode?: string,
    countryCode?: string,
    zip?: string,
  ) {
    this.city = city;
    this.stateCode = stateCode;
    this.countryCode = countryCode;
    this.zip = zip;
  }

  @ApiProperty()
  city: string;

  @ApiProperty({ required: false })
  stateCode?: string;

  @ApiProperty({ required: false })
  countryCode?: string;

  @ApiProperty({ required: false })
  zip?: string;
}
