import { Routes } from '@angular/router';

import { JugadorComponent } from '../jugador/jugador.component';
//import { EditJugadorComponent } from '../jugador/editjugador.component';


export const routes: Routes = [
  { path: 'home',  component: JugadorComponent },
  //{ path: 'edit/:id',     component: EditJugadorComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
