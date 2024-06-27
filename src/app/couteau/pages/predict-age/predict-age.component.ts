import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AgeImages } from '../../Enums/age-images';
import { PredictAge } from '../../interfaces/predictAge.interface';
import { PredictAgeService } from '../../services/predict-age.service';

@Component({
  selector: 'app-predict-age',
  templateUrl: './predict-age.component.html',
  styleUrls: ['./predict-age.component.scss'],
})
export class PredictAgeComponent  implements OnInit {

  prediction!: PredictAge;
  showPrediction: boolean = false;
  img: string = "";
  mensaje: string = "";

  constructor(
    private ageService: PredictAgeService,
    private toastController: ToastController
    ) { }

  ngOnInit() {}

  getAgeByName(name: string){
    if(!name){
      this.presentToast("Tiene que introducir algun nombre!");
      return;
    }
    this.ageService.getAgeByName(name)
      .subscribe(res => {
        if(res.age == null){
          this.presentToast("No se encontro edad con ese nombre!");
          return;
        }
        if(res.age <= 10){
          this.img = AgeImages.niño;
          this.mensaje = "Niño";
        }
        else if(res.age <= 25){
          this.img = AgeImages.joven;
          this.mensaje = "Joven";
        }
        else if(res.age <= 60){
          this.img = AgeImages.adulto;
          this.mensaje = "Adulto";
        }
        else {
          this.img = AgeImages.anciano
          this.mensaje = "Anciano"
        }

        this.prediction = res;
        this.showPrediction = true;
      })
  }

  inputClear(){
    this.showPrediction = false;
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
