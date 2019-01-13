import { Injectable } from '@angular/core';
import { Videojuego } from '../shared/videojuego';
import { VIDEOJUEGOS } from '../shared/videojuegos';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideojuegoService {

  constructor() { }
  
  getVideojuegos() : Videojuego[]{
    return VIDEOJUEGOS;
  }
  
  addVideojuegos() {
  
  }
}
