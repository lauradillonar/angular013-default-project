import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Default Project';
  activateBtn = true;

  writePassword = (pass: HTMLInputElement) => {
    if (pass.value.length > 0){
      this.activateBtn = false;
      console.log(pass.value);
    }else{
      this.activateBtn=true;
      console.log("Se ha ocultado el botón");
    }
  }

  showPassword = (value: String) => {
    alert(value);
  }
  
  
}
