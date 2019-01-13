import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jugador } from '../shared/jugador';
import { JUGADORES } from '../shared/jugadores';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

    
    uri = 'http://localhost:4000/addJugador';

    constructor(private http: HttpClient) { }

    addJugador(jugador: Jugador) {
        const jugadorJSON = {
          id: jugador.id,
          nombre: jugador.nombre,
          apellidos: jugador.apellidos,
          nickname: jugador.nickname,
          avatar: jugador.avatar,
          email: jugador.email,
          fecha_nac: jugador.fecha_nac,
          juegos: jugador.juegos,
        };
        this.http.post(`${this.uri}/add`, jugadorJSON)
        .subscribe(res => console.log('Done'));
    }
  
    getJugadores() {
        console.log("Llega");
        return this.http.get(`${this.uri}`);
    }
    
    editJugador(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }
    
    updateJugador(nombre, apellidos, nickname, avatar, email, fecha_nac, videojuegos,id) {

        const obj = {
            nombre: nombre,
            apellidos: apellidos,
            nickname: nickname,
            avatar: avatar,
            email: email,
            fecha_nac: fecha_nac,
            videojuegos: videojuegos,
          };
        this
          .http
          .post(`${this.uri}/update/${id}`, obj)
          .subscribe(res => console.log('Done'));
  }

    
    /*getJugadores() : Jugador[]{
        return JUGADORES;
    }*/
  
}
