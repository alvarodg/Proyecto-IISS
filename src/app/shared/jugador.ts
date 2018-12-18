import { Videojuego } from './videojuego'

export class Jugador {
  id: number;
  nombre: String;
  apellidos: String;  
  nickname: String;
  avatar: String;
  email: String;
  fecha_nac: any; //Date
  juegos: Videojuego[];
  //Recompensas conseguidas

  constructor(id: number, nombre: String, apellidos: String, nickname: String, avatar: String, email: String, fecha_nac: any) {
    this.id = id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.nickname = nickname;
    this.avatar = avatar;
    this.email = email;
    this.fecha_nac = fecha_nac;
    this.juegos = new Array<Videojuego>();
  }

  addVideojuego(juego: Videojuego) {
    this.juegos.push(juego);
  }
}
