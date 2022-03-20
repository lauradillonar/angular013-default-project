import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Default Project';
  position = 0;

  showElement = ($event: Event) => {
    this.position += 10;
    console.log('Boton en posición: ' + this.position);

    const mybutton: HTMLElement | null = document.getElementById('mybutton');
    if(mybutton !== null)
      mybutton.style.marginLeft = this.position + 'px';
  }
}
