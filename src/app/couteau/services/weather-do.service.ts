import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherDo } from '../interfaces/weatherDo.interface';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WeatherDoService {

  private urlApi: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getWeatherDo(): Observable<WeatherDo>{
    return this.http.get<WeatherDo>(this.urlApi);
  }

}
