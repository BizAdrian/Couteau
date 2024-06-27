import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PredictGender } from '../interfaces/predictGender.interface';

@Injectable({
  providedIn: 'root'
})
export class PredictGenderService {

  private urlBase: string = 'https://api.genderize.io';

  constructor(private http: HttpClient) { }

  getGenderByName(name: string): Observable<PredictGender>{
    const url = `${this.urlBase}/?name=${name}`;
    return this.http.get<PredictGender>(url);
  }
}
