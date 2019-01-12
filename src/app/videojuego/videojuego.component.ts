import { Component, OnInit } from '@angular/core';
import { Videojuego } from '../shared/videojuego';
import {VideojuegoService} from '../services/videojuego.service';

@Component({
  selector: 'app-videojuego',
  templateUrl: './videojuego.component.html',
  styleUrls: ['./videojuego.component.scss']
})
export class VideojuegoComponent implements OnInit {

  videojuegos: Videojuego[];
  selectedVideojuego: Videojuego;
  
  constructor(private videojuegoService : VideojuegoService) { }

  ngOnInit() {
    this.videojuegos = this.videojuegoService.getVideojuegos();
    this.selectedVideojuego = this.videojuegos[0];
  }
  
  onSelect(videojuego: Videojuego) {
    this.selectedVideojuego = videojuego;
  }
}
