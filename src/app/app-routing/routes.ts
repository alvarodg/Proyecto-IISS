import { Routes } from '@angular/router';

import { JugadorComponent } from '../jugador/jugador.component';
import { AddJugadorComponent } from '../addjugador/addjugador.component';
//import { EditJugadorComponent } from '../editjugador/editjugador.component';


export const routes: Routes = [
  { path: 'home',  component: JugadorComponent },
  { path: 'add', component: AddJugadorComponent },
  //{ path: 'edit/:id',     component: EditJugadorComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
