import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { CountryUniversity } from '../../interfaces/countryUniversity.interface';
import { CountryUniService } from '../../services/country-uni.service';

@Component({
  selector: 'app-country-university',
  templateUrl: './country-university.component.html',
  styleUrls: ['./country-university.component.scss'],
})
export class CountryUniversityComponent  implements OnInit {

  universities: CountryUniversity[] = [];
  showData: boolean = false;

  constructor(
    private countryUniService : CountryUniService,
    private toastController: ToastController,
    private loadingCtrl: LoadingController
    ) { }

  ngOnInit() {}

  async getUniversitiesByCountry(country: string){
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'circles',
    });

    if(!country){
      this.presentToast("Tiene que introducir un pais en ingles");
      return;
    }

    loading.present();
    this.countryUniService.getUniversitiesByCountry(country)
      .subscribe(res => {
        if(res.length === 0){
          loading.dismiss();
          this.presentToast("No se encontraron universidades de ese pais");
          return;
        }
        loading.dismiss();
        this.universities = res;
        this.showData = true;
      })
  }

  inputClear(){
    this.showData = false;
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: "bottom"
    });

    await toast.present();
  }

}
