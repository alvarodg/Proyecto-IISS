import { Videojuego } from './videojuego'

export class Jugador {
  nombre: String;
  apellidos: String;  
  nickname: String;
  email: String;
  fecha_nac: any; //Date
  juegos: Videojuego[];
  //Recompensas conseguidas

  constructor(nombre: String, apellidos: String, nickname: String, email: String, fecha_nac: any) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.nickname = nickname;
    this.email = email;
    this.fecha_nac = fecha_nac;
    this.juegos = new Array<Videojuego>();
  }

  addVideojuego(juego: Videojuego) {
    this.juegos.push(juego);
  }
}
