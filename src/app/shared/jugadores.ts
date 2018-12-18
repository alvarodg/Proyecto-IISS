import { Jugador } from './jugador'

export const JUGADORES: Jugador[] = [
    {
      id: '0',
      nombre: 'Nombre0',
      apellidos: 'Apellidos0',
      nickname: 'Nickname0',
      avatar: 'assets/images/avatar0.jpg',
      email: 'Email0',
      fecha_nac: '00/00/0000',
      juegos: [
        /*{
          rating: 5,
          comment: 'Texto del comentario 1.',
          author: 'Autor del comentario 1',
          date: '19/11/2018'
        },
        {
          rating: 2,
          comment: 'Texto del comentario 2.',
          author: 'Autor del comentario 2',
          date: '19/11/2018'
        }*/
      ]
    },
    
    { 
      id: '1',
      nombre: 'Nombre1',
      apellidos: 'Apellidos1',
      nickname: 'Nickname1',
      avatar: 'assets/images/avatar1.jpg',
      email: 'Email1',
      fecha_nac: '11/11/1111',
      juegos: [
        /*{
          rating: 5,
          comment: 'Texto del comentario 1.',
          author: 'Autor del comentario 1',
          date: '19/11/2018'
        },
        {
          rating: 2,
          comment: 'Texto del comentario 2.',
          author: 'Autor del comentario 2',
          date: '19/11/2018'
        }*/
      ]
    },
}
]