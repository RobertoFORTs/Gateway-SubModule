import { ApiProperty } from '@nestjs/swagger';

export class CreateClimateDto {
  @ApiProperty()
  city: string;

  @ApiProperty({ required: false })
  stateCode?: string;

  @ApiProperty({ required: false })
  countryCode?: string;

  @ApiProperty({ required: false })
  zip?: string;
}
