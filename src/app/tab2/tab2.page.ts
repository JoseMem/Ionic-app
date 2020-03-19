import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  //Declaramos nuestras variables
  n1: number;
  n2: number;
  total: number = 0;

  //Funcion para sumar
  Suma(){
    this.total = this.n1 + this.n2;
  }

  constructor() {}

}
