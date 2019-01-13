import { Component, OnInit } from '@angular/core';
import { Jugador } from '../shared/jugador';
import {JugadorService} from '../services/jugador.service';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.scss']
})

export class JugadorComponent implements OnInit {
  
  jugadores: Jugador[];
  selectedJugador: Jugador;
  
  constructor(private jugadorService : JugadorService) { }

  ngOnInit() {
    this.jugadores = this.jugadorService.getJugadores();
    this.selectedJugador = this.jugadores[0];
    this.jugadorService.addJugador(this.selectedJugador);
  }
  
  onSelect(jugador: Jugador) {
    this.selectedJugador = jugador;
  }
}
