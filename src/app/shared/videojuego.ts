import { Jugador } from './jugador'
import { DLC } from './dlc'
import { Recompensa } from './recompensa'

export class Videojuego {
  id: String;
  titulo: String;
  descripcion: String;
  generos: String[];
  plataforma: String;
  jugadores: String[];
  /*dlcs: DLC[];
  recompensas: Recompensa[];*/

  constructor(id: String, titulo: String, descripcion: String, generos: String[], plataforma: String) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.generos = generos;
    this.plataforma = plataforma;
    this.jugadores = new Array<String>;
  }

  addJugador(idjugador: String) {
    this.jugadores.push(idjugador);
  }

  /*addDLC(dlc: DLC) {
    this.dlcs.push(dlc);
  }

  addRecompensa(recompensa: Recompensa) {
    this.recompensas.push(recompensa);
  }
  
  showRecompensasConseguidas(){
    //??
  }
  
  showJuegosCompletados(){
    //?????
  }*/
}
