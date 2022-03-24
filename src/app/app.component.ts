import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Default Project';
  nombre = '';
  saludarNombre($event: Event){
    const e = $event.target as HTMLInputElement;
    if (e !== null){
      return e.value;
    }else{
      return '';
    }
  }
}
