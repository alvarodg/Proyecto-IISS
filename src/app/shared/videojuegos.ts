import { Videojuego } from './videojuego'

export const VIDEOJUEGOS: Videojuego [] = [
    {
      id: '0',
      titulo: 'Videojuego0',
      descripcion: 'Descripcion0',
      generos: ['Genero0', 'Genero1', 'Genero2'],
      plataforma: 'Plataforma0',
      jugadores: ['0'],
      addJugador: Videojuego.prototype.addJugador 
    },
    
    { 
      id: '1',
      titulo: 'Videojuego1',
      descripcion: 'Descripcion1',
      generos: ['Genero0', 'Genero2'],
      plataforma: 'Plataforma0',
      jugadores: ['0', '1'],
      addJugador: Videojuego.prototype.addJugador 
    },
];