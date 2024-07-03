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
        `http://localhost:3001/climate?page=${paginateOptions.page}&take=${paginateOptions.take}`,
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
      .pipe(
        map((response) => {
          console.log('Climate API Response:', response.data);

          const item = response.data; // Assuming response.data is an object, not an array
          const transformedResponse = {
            id: item.id,
            dateTime: item.dateTime,
            temperature: item.temperature,
            humidity: item.humidity,
            windSpeed: item.windSpeed,
            climateDescription: item.climateDescription,
            location: {
              city: item.location._city,
              state: item.location._state,
              country: item.location._country,
              zip: item.location._zip,
            },
            climate: item.climate,
          };

          return transformedResponse;
        }),
      );
  }
}
