import { Injectable } from '@angular/core';
import { Jugador } from '../shared/jugador';
import { JUGADORES } from '../shared/jugadores';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  constructor() { }
  
  getJugadores() : Jugador[]{
    return JUGADORES;
  }
}
