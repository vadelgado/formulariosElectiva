import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  abrirAlerta:boolean = false;
  
  mostrarEnConsola(nombre:string,apellido:string,edad:string,fecha:string,telefono:string,
    mail:string){
    console.log("Su nombre es: "+nombre);
    console.log("Su apellido es: "+apellido);
    console.log("Su edad es: "+edad);
    console.log("Su fecha de nacimiento es: "+fecha);
    console.log("Su numero de telefono es: "+telefono);
    console.log("Su correo electronico es: "+mail);    
    this.abrirAlerta=true; //muestre enncosola y cabie de false a true
  }
}
