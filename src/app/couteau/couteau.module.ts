import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouteauRoutingModule } from './couteau-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { IonicModule } from '@ionic/angular';
import { PredictGenderComponent } from './pages/predict-gender/predict-gender.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { GenderPipe } from './pipes/gender.pipe';
import { PredictAgeComponent } from './pages/predict-age/predict-age.component';
import { CountryUniversityComponent } from './pages/country-university/country-university.component';
import { WeatherDoComponent } from './pages/weather-do/weather-do.component';
import { ContratamePage } from './pages/contratame/contratame.page';


@NgModule({
  declarations: [
    // pages
    InicioComponent,
    PredictGenderComponent,
    PredictAgeComponent,
    CountryUniversityComponent,
    WeatherDoComponent,
    ContratamePage,

    // components
    SearchInputComponent,

    // pipes
    GenderPipe
  ],
  imports: [
    CommonModule,
    CouteauRoutingModule,
    IonicModule,
  ]
})
export class CouteauModule { }
