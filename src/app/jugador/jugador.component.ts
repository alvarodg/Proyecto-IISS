import { Component, OnInit } from '@angular/core';
import { Jugador } from '../shared/jugador';
import { JUGADORES } from '../shared/jugadores';


@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.scss']
})
export class JugadorComponent implements OnInit {

  jugadores = JUGADORES;
  selectedJugador = JUGADORES[0];
  
  constructor() { }

  ngOnInit() {
  }
  
  onSelect(jugador: Jugador) {
    this.selectedJugador = jugador;
  }
}
