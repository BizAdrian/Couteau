import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PredictAge } from '../interfaces/predictAge.interface';

@Injectable({
  providedIn: 'root'
})
export class PredictAgeService {
  private apiUrl = 'https://api.agify.io';

  constructor(private http: HttpClient) { }

  getAgeByName(name: string): Observable<PredictAge> {
    return this.http.get<PredictAge>(`${this.apiUrl}/?name=${name}`);
  }
}