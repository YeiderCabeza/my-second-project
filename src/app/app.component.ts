import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-second-project';


 pantalla = ""
 pantalla2 = ""

 num0(){ this.pantalla= this.pantalla + "0"}
 num1(){ this.pantalla= this.pantalla + "1"}
 num2(){ this.pantalla= this.pantalla + "2"} 
 num3(){ this.pantalla= this.pantalla + "3"} 
 num4(){ this.pantalla= this.pantalla + "4"} 
 num5(){ this.pantalla= this.pantalla + "5"} 
 num6(){ this.pantalla= this.pantalla + "6"} 
 num7(){ this.pantalla= this.pantalla + "7"} 
 num8(){ this.pantalla= this.pantalla + "8"} 
 num9(){ this.pantalla= this.pantalla + "9"}  

 suma(){}
 resta(){}
 multiplicar(){}
 dividir(){} 
 igual(){ } 


 punto(){} 
 borrar(){} 
 porcentaje(){} 
 ce(){}
 c(){}


}
