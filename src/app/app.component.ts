import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Default Project';
  lenguajes = undefined;
  lenguajesII: {frontEnd: string, backEnd: string} = {
    frontEnd: 'HTML, CSS y JS',
    backEnd: 'Node.js, Java, PHP'
  };
}
