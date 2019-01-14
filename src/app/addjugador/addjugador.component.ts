import { Component, OnInit } from '@angular/core';
import { Jugador } from '../shared/jugador';
import { JugadorService } from '../services/jugador.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addjugador',
  templateUrl: './addjugador.component.html',
  styleUrls: ['./addjugador.component.scss']
})
export class AddjugadorComponent implements OnInit {
  
  profileForm = new FormGroup({
    nombre: new FormControl(''),
    nickname: new FormControl(''),
    email: new FormControl(''),
    fecha_nac: new FormControl('')
  });
  
  
  constructor(private jugadorService : JugadorService) { }

  onSubmit() {
    this.jugadorService.addJugador({
               nombre: this.profileForm.get('nombre').value,
               nickname: this.profileForm.get('nickname').value,
               avatar: 'assets/images/avatar0.jpg',
               email: this.profileForm.get('email').value,
               fecha_nac: this.profileForm.get('fecha_nac').value
               });
  }  
    
}
