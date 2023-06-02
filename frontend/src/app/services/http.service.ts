import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  protected urlBackendApi = environment.urlBackendApi;

  private reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'No-Auth': 'True',
  });

  constructor(private httpClient: HttpClient) {}

  get<T>(endpoint: string): Observable<T> {
    return this.httpClient
      .get(`${this.urlBackendApi}/${endpoint}`, {
        headers: this.reqHeader,
        observe: 'response',
      })
      .pipe(map((res) => res.body as T));
  }
}
