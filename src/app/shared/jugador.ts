
export class Jugador {
  nombre: String;
  nickname: String;
  avatar: String;
  email: String;
  fecha_nac: any; //Date

  constructor(nombre: String, nickname: String, avatar: String, email: String, fecha_nac: any) {
    this.nombre = nombre;
    this.nickname = nickname;
    this.avatar = avatar;
    this.email = email;
    this.fecha_nac = fecha_nac;
  }

}
