import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { NewsletterService } from '../services/newsletter.service';
import { ClimateService } from '../services/climate.service';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiOperation,
  ApiNoContentResponse,
} from '@nestjs/swagger';
import { ApiPaginatedResponse } from '../../decorators/paginate.decorator';
import { BadRequestResponse } from '../exceptions/bad-request';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UserResponseDto } from '../dtos/response-user.dto';
import { PageOptionsDto } from '../dtos/paginate-options.dto';
import { ClimateResponseDto } from '../dtos/response-climate.dto';
import { CreateClimateDto } from '../dtos/create-climate.dto';
@Controller('gateway')
@ApiTags('gateway')
export class ApiGatewayController {
  constructor(
    private readonly climateService: ClimateService,
    private readonly newsletterService: NewsletterService,
  ) {}

  @Get('/climate')
  @ApiPaginatedResponse(ClimateResponseDto)
  @ApiOperation({ summary: 'Get all climate data' })
  getAllClimateData(@Query() paginateOptions: PageOptionsDto): Observable<any> {
    return this.climateService.getAllClimateData(paginateOptions);
  }

  @Post('/climate')
  @ApiCreatedResponse({
    description: 'Created Succesfully',
    type: ClimateResponseDto,
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Bad Request',
    type: BadRequestResponse,
  })
  @ApiOperation({ summary: 'Get localization climate data' })
  getLocalizationClimate(@Body() data: CreateClimateDto): Observable<any> {
    return this.climateService.getLocalizationClimate(data);
  }

  @Post('/user')
  @ApiCreatedResponse({
    description: 'Created Succesfully',
    type: CreateUserDto,
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Bad Request',
    type: BadRequestResponse,
  })
  @ApiOperation({ summary: 'Register a user' })
  registerUser(@Body() body: CreateUserDto): Observable<any> {
    return this.newsletterService.registerUser(body);
  }

  @Get('/user')
  @ApiPaginatedResponse(UserResponseDto)
  @ApiOperation({ summary: 'Get user information' })
  getUser(@Query() paginateOptions: PageOptionsDto): Observable<any> {
    return this.newsletterService.getUser(paginateOptions);
  }

  @Delete('/user/:id')
  @ApiNoContentResponse({ description: 'User deleted successfully' })
  @ApiBadRequestResponse({
    description: 'Bad Request',
    type: BadRequestResponse,
  })
  @ApiOperation({ summary: 'Delete a user' })
  deleteUser(@Param('id') id: string): Observable<any> {
    return this.newsletterService.deleteUser(id);
  }
}
