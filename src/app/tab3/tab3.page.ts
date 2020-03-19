import { Component } from '@angular/core';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  //Declaracion de varuables
  n1: number;
  n2: number;
  resultado: number = 0;
  op: number;

  //Funcion para realizar operaciones matematicas
  Calcular(): void{
    var r= 0;
    switch(this.op){
      case 1:
        r = this.n1 + this.n2;
        break;
        case 2:
          r = this.n1 - this.n2;
          break;
          case 3:
            r = this.n1 * this.n2;
            break;
            case 4:
              r = this.n1 / this.n2;
              break;
    }
    this.resultado = r;
  }

  constructor() {}

}
