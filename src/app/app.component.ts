import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directivas';
  film = {
    title: 'Todo sobre mi madre',
    imgSrc: 'https://www.premiosgoya.com/wp-content/uploads/2015/12/Todo-sobre-mi-madre-320x432.jpg',
    director: 'Pedro Almodovar',
    anyo: 1999,
    actors: [
      {name: 'Cecilia Roth'},
      {name: 'Marisa Paredes'},
      {name: 'Candela Peña'},
      {name: 'Antonia San Juan'},
      {name: 'Penélope Cruz'}
    ]
  };
}
