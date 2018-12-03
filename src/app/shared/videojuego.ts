import { Jugador } from './jugador'
import { DLC } from './dlc'
import { Recompensa } from './recompensa'

export class Videojuego {
  titulo: String;
  descripcion: String;
  generos: String[];
  plataforma: String;
  jugadores: Jugador[];
  dlcs: DLC[];
  recompensas: Recompensa[];

  constructor(titulo: String, descripcion: String, generos: String[], plataforma: String) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.generos = generos;
    this.plataforma = plataforma;
  }

  addJugador(jugador: Jugador) {
    this.jugadores.push(jugador);
  }

  addDLC(dlc: DLC) {
    this.dlcs.push(dlc);
  }

  addRecompensa(recompensa: Recompensa) {
    this.recompensas.push(recompensa);
  }
}
