import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ClimateService {
  constructor(private readonly httpService: HttpService) {}

  getAllClimateData(): Observable<any> {
    return this.httpService
      .get('http://localhost:3000/climate?page=1&take=2')
      .pipe(map((response) => response.data));
  }

  getLocalizationClimate(data: any): Observable<any> {
    const requestBody = {
      city: data.city,
      stateCode: data.stateCode,
      countryCode: data.countryCode,
      zip: data.zip,
    };
    return this.httpService
      .post('http://localhost:3000/climate', requestBody)
      .pipe(map((response) => response));
  }
}
