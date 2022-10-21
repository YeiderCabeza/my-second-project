import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-second-project';
constructor(){}
 mile= false
 pantalla = ""
 pantalla2 = ""
 operador= ""

 num0(cero:string){ this.pantalla= this.pantalla + "0"}
 num1(uno:string){ this.pantalla= this.pantalla + "1"}
 num2(dos:string){ this.pantalla= this.pantalla + "2"} 
 num3(tres:string){ this.pantalla= this.pantalla + "3"} 
 num4(cuatro:string){ this.pantalla= this.pantalla + "4"} 
 num5(cinco:string){ this.pantalla= this.pantalla + "5"} 
 num6(seis:string){ this.pantalla= this.pantalla + "6"} 
 num7(siete:string){ this.pantalla= this.pantalla + "7"} 
 num8(ocho:string){ this.pantalla= this.pantalla + "8"} 
 num9(nueve:string){ this.pantalla= this.pantalla + "9"}   

 suma(){
this.pantalla2=this.pantalla;
this.pantalla ="";
this.mile= false;
this.operador="suma"}

 resta(){
  this.pantalla2=this.pantalla;
  this.pantalla ="";
  this.mile= false;
this.operador="resta"
 }

 multiplicar(){
  this.pantalla2=this.pantalla;
  this.pantalla ="";
  this.mile= false;
this.operador="multiplicar"
 }

 dividir(){
  this.pantalla2=this.pantalla;
  this.pantalla ="";
  this.mile= false;
this.operador="dividir"
 } 

 porcentaje(){
  this.pantalla2=this.pantalla;
  this.pantalla ="";
this.operador="porcentaje"
 } 

 igual(){ 
  let valor1= Number(this.pantalla);
  let valor2= Number(this.pantalla2);

  if (this.operador == "suma") {
    let suma = Number(valor1) + Number(valor2);
    this.pantalla = suma.toString();
  }else if(this.operador == "resta") {
    let suma = Number(valor2) - Number(valor1);
    this.pantalla = suma.toString();
  }else if(this.operador == "multiplicar") {
    let suma = Number(valor1) * Number(valor2);
    this.pantalla = suma.toString();
  }else if(this.operador == "dividir") {
    let suma = Number(valor2) / Number(valor1);
    this.pantalla = suma.toString();
  }else if(this.operador == "porcentaje") {
    let suma = Number(valor2) * Number(valor1)/100;
    this.pantalla = suma.toString();
  }
 } 


 punto(){
 if (this.mile=false) {
  
 }
 } 
 borrar(){
  this.pantalla="";
  this.pantalla2="";
 } 
 
 ce(){}
 c(){
  this.pantalla="";
  this.pantalla2="";


 }


}
