import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Default Project';

  website = {
    name: 'Haz click para visitar Google',
    href: 'https://www.google.com',
    logo: 'https://cdn.iconscout.com/icon/free/png-256/google-152-189813.png',
    description: "Uno de los buscadores más conocidos del mundo"
  };
}
