import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent  implements OnInit {

  @Input() label: string = "Introduce un nombre";
  @Input() placeHolder: string = "Ej: Victor";
  @Output() onClick = new EventEmitter<string>();
  @Output() onClear = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {}

  enviar(termino: any){
    console.log(termino);
    this.onClick.emit(termino.value);
  }

  inputClear(input: IonInput){
    if(input.value == ""){
      this.onClear.emit(input.value);
    }
  }

}
