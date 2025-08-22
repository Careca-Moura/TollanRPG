import { Routes } from '@angular/router';
import { FichaTemplate } from './ficha-template/ficha-template/ficha-template';
import { RpgAztla } from './rpg/rpg-aztla/rpg-aztla';

export const routes: Routes = [
   { path: 'Ficha', component: FichaTemplate }, // Rota padrão
  { path: 'Wiki', component: RpgAztla }, // Rota para "Sobre"
  { path: '**', redirectTo: 'Ficha' } // Rota para páginas não encontradas
];
