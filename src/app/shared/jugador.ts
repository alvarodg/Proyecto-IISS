import { Videojuego } from './videojuego'

export class Jugador {
  id: String;
  nombre: String;
  apellidos: String;  
  nickname: String;
  avatar: String;
  email: String;
  fecha_nac: any; //Date
  juegos: String[];
  //Recompensas conseguidas

  constructor(id: String, nombre: String, apellidos: String, nickname: String, avatar: String, email: String, fecha_nac: any) {
    this.id = id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.nickname = nickname;
    this.avatar = avatar;
    this.email = email;
    this.fecha_nac = fecha_nac;
    this.juegos = new Array<String>();
  }

  addVideojuego(idJuego: String) {
    this.juegos.push(idJuego);
  }
}
