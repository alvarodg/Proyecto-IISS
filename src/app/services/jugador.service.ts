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
          nombre: jugador.nombre,
          nickname: jugador.nickname,
          avatar: jugador.avatar,
          email: jugador.email,
          fecha_nac: jugador.fecha_nac,
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
    
    updateJugador(nombre, nickname, email, fecha_nac, id) {

    const obj = {
        nombre: nombre,
        nickname: nickname,
        avatar: 'assets/images/avatar0',
        email: email,
        fecha_nac: fecha_nac
      };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
    }
    
    deleteJugador(id) {
         return this
              .http
              .get(`${this.uri}/delete/${id}`);
    }
    
    /*getJugadores() : Jugador[]{
        return JUGADORES;
    }*/
  
}
