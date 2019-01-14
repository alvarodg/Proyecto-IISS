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
  
  constructor(private jugadorService : JugadorService) { }

  ngOnInit() {
    this.jugadorService.getJugadores().
    subscribe((data: Jugador[]) => { this.jugadores = data;});
  }
  
  deleteJugador(id) {
    this.jugadorService.deleteJugador(id).subscribe(res => {console.log("Borrado");});
    this.jugadorService.getJugadores().
    subscribe((data: Jugador[]) => { this.jugadores = data;});
  }
  
  
}
