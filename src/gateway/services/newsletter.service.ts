import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class NewsletterService {
  constructor(private readonly httpService: HttpService) {}

  registerUser(data: any): Observable<any> {
    const requestBody = {
      name: data.name,
      email: data.email,
      frequency: data.frequency,
    };
    return this.httpService
      .post('localhost:3000/user', requestBody)
      .pipe(map((response) => response.data));
  }

  getUser(paginateOptions): Observable<any> {
    return this.httpService
      .get(
        `localhost:3000/user?page=${paginateOptions.page}&take=${paginateOptions.take}`,
      )
      .pipe(map((response) => response.data));
  }

  deleteUser(id: string): Observable<any> {
    return this.httpService
      .delete(`localhost:3000/user/${id}`)
      .pipe(map((response) => response.data));
  }
}
