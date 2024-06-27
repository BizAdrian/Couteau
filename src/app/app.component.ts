import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'couteau/inicio', icon: 'home' },
    { title: 'Gender', url: 'couteau/genero', icon: 'people-circle' },
    { title: 'Age', url: 'couteau/edad', icon: 'heart-circle' },
    { title: 'Country University', url: 'couteau/pais-universidad', icon: 'bar-chart' },
    { title: 'Weather DO', url: 'couteau/clima-DO', icon: 'cloudy' },
    { title: 'Wordpress', url: 'couteau/wordpress', icon: 'globe' },
    { title: 'Hire me', url: 'couteau/contratame', icon: 'person-add' },
  ];
  constructor() {}
}
