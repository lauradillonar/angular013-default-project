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

  logKey = ($event: Event & {key: String}) => {
    console.log($event);
    if ($event.key === 'Delete' || $event.key == 'Backspace'){
      this.isActive = true;
      this.msg = "Pulsaste retroceder o suprimir! :(";
    }else {
      this.isActive = false;
      this.msg = 'No pulses las teclas retroceder o suprimir';
    }
  }
}
