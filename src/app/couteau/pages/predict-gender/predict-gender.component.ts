import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PredictGender } from '../../interfaces/predictGender.interface';
import { PredictGenderService } from '../../services/predict-gender.service';

@Component({
  selector: 'app-predict-gender',
  templateUrl: './predict-gender.component.html',
  styleUrls: ['./predict-gender.component.scss'],
})
export class PredictGenderComponent  implements OnInit {

  prediction!: PredictGender;
  showPrediction: boolean = false;
  cardColor: string = "light";

  constructor(
    private genderService: PredictGenderService,
    private toastController: ToastController
    ) { }

  ngOnInit() {}

  predictGender(termino: string){
    if(!termino.trim()){
      this.presentToast("Tiene que introducir algun nombre!");
      return;
    }
    this.genderService.getGenderByName(termino)
      .subscribe(res => {
        if(res.gender == "male"){
          this.cardColor = "primary";
        }
        else if(res.gender == "female"){
          this.cardColor = "danger"
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
