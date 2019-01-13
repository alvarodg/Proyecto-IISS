import { Routes } from '@angular/router';

import { JugadorComponent } from '../jugador/jugador.component';
import { AddJugadorComponent } from '../add-jugador/add-jugador.component';
import { EditJugadorComponent } from '../edit-jugador/edit-jugador.component';

export const routes: Routes = [
  { path: 'listado',  component: JugadorComponent },
  [ path: 'add', component: AddJugadorComponent },
  { path: 'edit/:id',     component: EditJugadorComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];
