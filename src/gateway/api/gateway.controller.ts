import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { NewsletterService } from '../services/newsletter.service';
import { ClimateService } from '../services/climate.service';

@Controller('gateway')
export class ApiGatewayController {
  constructor(
    private readonly climateService: ClimateService,
    private readonly newsletterService: NewsletterService,
  ) {}

  @Get('/climate')
  getAllClimateData(): Observable<any> {
    return this.climateService.getAllClimateData();
  }

  @Post('/climate')
  getLocalizationClimate(@Body() data: any): Observable<any> {
    return this.climateService.getLocalizationClimate(data);
  }

  @Post('/user')
  registerUser(@Body() data: any): Observable<any> {
    return this.newsletterService.registerUser(data);
  }

  @Get('/user')
  getUser(): Observable<any> {
    return this.newsletterService.getUser();
  }

  @Delete('/user/:id')
  deleteUser(@Param('id') id: string): Observable<any> {
    return this.newsletterService.deleteUser(id);
  }
}
