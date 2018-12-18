import { Recompensa } from './recompensa'

export class DLC {
  titulo: String;
  descripcion: String;
  recompensas: Recompensa[];

  constructor(titulo: String, descripcion: String, recompensas: Recompensa[]) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.recompensas = recompensas;
  }
}
