import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Default Project';
  lenguajes = {
    frontEnd: {
      html: "Hyper Text Meta Language",
      css: null,
      js: undefined
    }
  }
}
