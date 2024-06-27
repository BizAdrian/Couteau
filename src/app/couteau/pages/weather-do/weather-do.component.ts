import { Component, OnInit } from '@angular/core';
import { WeatherDo } from '../../interfaces/weatherDo.interface';
import { WeatherDoService } from '../../services/weather-do.service';

@Component({
  selector: 'app-weather-do',
  templateUrl: './weather-do.component.html',
  styleUrls: ['./weather-do.component.scss'],
})
export class WeatherDoComponent  implements OnInit {

  weatherDo!: WeatherDo;
  clima: string = "";
  constructor(private weatherDoService: WeatherDoService) { }

  ngOnInit() {
    this.weatherDoService.getWeatherDo()
      .subscribe(res => {
        if(!res) return;
        this.weatherDo = res;
      });
    }

}
