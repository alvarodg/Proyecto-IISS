import { Injectable } from '@angular/core';
import { Videojuego } from '../shared/videojuego';
import { VIDEOJUEGOS } from '../shared/videojuegos';

@Injectable({
  providedIn: 'root'
})
export class VideojuegoService {

  constructor() { }
  
  getVideojuegos() : Videojuego[]{
    return VIDEOJUEGOS;
  }
}
