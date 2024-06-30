import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ClimateService {
  constructor(private readonly httpService: HttpService) {}

  getAllClimateData(paginateOptions): Observable<any> {
    return this.httpService
      .get(
        `localhost:3001/climate?page=${paginateOptions.page}&take=${paginateOptions.take}`,
      )
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
      .post('http://localhost:3001/climate', requestBody)
      .pipe(map((response) => response));
  }
}
