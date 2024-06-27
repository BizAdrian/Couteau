import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: string): string {
    let res: string = "Desconocido";
    switch(value){
      case "male":
          res = "Masculino"
        break;
      case "female":
          res = "Femenino"
        break;
    }
    return res;
  }

}
