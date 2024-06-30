import { ApiProperty } from '@nestjs/swagger';

export class BadRequestResponse {
  @ApiProperty({ example: 'Bad Request' })
  error: string = 'Bad Request';

  @ApiProperty({ example: 400 })
  statusCode: number;

  @ApiProperty()
  message: string;
}
