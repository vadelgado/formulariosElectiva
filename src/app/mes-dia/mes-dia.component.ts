import { Component } from '@angular/core';
import { Mes } from "../mes"

@Component({
  selector: 'app-mes-dia',
  templateUrl: './mes-dia.component.html',
  styleUrls: ['./mes-dia.component.css']
})
export class MesDiaComponent {

  mes: Mes []=[
    { id:"1",nombre:"Enero"},
    { id:"2",nombre:"Febrero"},
    { id:"3",nombre:"Marzo"},
    { id:"4",nombre:"Abril"},
    { id:"5",nombre:"Mayo"},
    { id:"6",nombre:"Junio"},
    { id:"7",nombre:"Julio"},
    { id:"8",nombre:"Agosto"},
    { id:"9",nombre:"Septiembre"},
    { id:"10",nombre:"Octubre"},
    { id:"11",nombre:"Noviembre"},
    { id:"12",nombre:"Diciembre"}
  ]

  meses?:string;


}
