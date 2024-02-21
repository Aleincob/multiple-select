import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getApi() {
    return this.http.get<Card[]>(
      'https://random-data-api.com/api/v2/appliances?size=20'
    );
  }
}
