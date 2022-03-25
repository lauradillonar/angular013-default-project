import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Default Project';
  nombre = 'David';

  printNombre(event: Event):void{
    console.log('Valor inicial de nombre: '+this.nombre)
  }
}
