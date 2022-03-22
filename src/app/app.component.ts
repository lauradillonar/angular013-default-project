import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Default Project';

  logKey = (e: any) => {
    if (e.target !== null)
      console.log(e.target.value);
  }
}
