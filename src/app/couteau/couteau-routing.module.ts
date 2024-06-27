import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratamePage } from './pages/contratame/contratame.page';
import { CountryUniversityComponent } from './pages/country-university/country-university.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PredictAgeComponent } from './pages/predict-age/predict-age.component';
import { PredictGenderComponent } from './pages/predict-gender/predict-gender.component';
import { WeatherDoComponent } from './pages/weather-do/weather-do.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'inicio',
        component: InicioComponent
      },
      {
        path: 'genero',
        component: PredictGenderComponent
      },
      {
        path: 'edad',
        component: PredictAgeComponent
      },
      {
        path: 'pais-universidad',
        component: CountryUniversityComponent
      },
      {
        path: 'clima-DO',
        component: WeatherDoComponent
      },
      {
        path: 'contratame',
        component: ContratamePage
      },
      {
        path: '**',
        redirectTo: 'inicio'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CouteauRoutingModule { }
