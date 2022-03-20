import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Default Project';
  msg = 'No pulses las teclas retroceder o suprimir';
  isActive = false;

  logKey = ($event: Event & {keyCode: Number}) => {
    console.log($event);
    if ($event.keyCode === 127 || $event.keyCode == 8){
      this.isActive = true;
      this.msg = "Pulsaste retroceder o suprimir! :(";
    }else {
      this.isActive = false;
      this.msg = 'No pulses las teclas retroceder o suprimir';
    }
  }
}
