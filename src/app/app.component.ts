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

  logKey = ($event: Event) => {
    const e = $event.target as HTMLInputElement
    if (e !== null)
      console.log(e.value);
  }
}
