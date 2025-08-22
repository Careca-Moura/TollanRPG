import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FichaTemplate } from './ficha-template/ficha-template/ficha-template';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FichaTemplate],
  providers: [HttpClient],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'Aztla - Terra dos Espíritos (RPG)';

}
