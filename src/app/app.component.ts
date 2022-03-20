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

  logKey = () => {
      this.isActive = true;
      this.msg = "Pulsaste retroceder o suprimir! :(";
  }
}
