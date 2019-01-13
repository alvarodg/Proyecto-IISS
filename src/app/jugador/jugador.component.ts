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
    this.jugadorService.addJugador({
      nombre: 'Nombre0',
      nickname: 'Nickname0',
      avatar: 'assets/images/avatar0.jpg',
      email: 'Email0',
      
    });
    this.jugadorService.addJugador({
      nombre: 'Nombre0',
      nickname: 'Nickname0',
      avatar: 'assets/images/avatar0.jpg',
      email: 'Email0',
      
    });
      
    this.jugadorService.getJugadores().
    subscribe((data: Jugador[]) => { this.jugadores = data;});
  }
  
  onSelect(jugador: Jugador) {
    this.selectedJugador = jugador;
  }
}
