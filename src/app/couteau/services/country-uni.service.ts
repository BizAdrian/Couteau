import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryUniversity } from '../interfaces/countryUniversity.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryUniService {

  private urlBase: string = "http://universities.hipolabs.com"

  constructor(private http: HttpClient) { }

  getUniversitiesByCountry(country: string) : Observable<CountryUniversity[]>{
    return this.http.get<CountryUniversity[]>(`${this.urlBase}/search?country=${country}`);
  }

}
