import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html' ,
    styleUrls: ['./contador.component.css' ]
  })
  export class contadorComponent {
    numero: number = 0;

    decrementar() {
        this.numero--;
    }

    incrementar(){
        this.numero++;
    }
  }