import { Routes } from '@angular/router';

import { JugadorComponent } from '../jugador/jugador.component';
import { AddjugadorComponent } from '../addjugador/addjugador.component';
import { EditjugadorComponent } from '../editjugador/editjugador.component';


export const routes: Routes = [
  { path: 'jugadores',  component: JugadorComponent },
  { path: 'jugadores/add', component: AddjugadorComponent },
  { path: 'jugadores/edit/:id',     component: EditjugadorComponent },
  { path: '', redirectTo: '/jugadores', pathMatch: 'full' }
];
