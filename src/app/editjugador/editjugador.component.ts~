import { Component, OnInit } from '@angular/core';
import { Jugador } from '../shared/jugador';
import { JugadorService } from '../services/jugador.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editjugador',
  templateUrl: './editjugador.component.html',
  styleUrls: ['./editjugador.component.scss']
})
export class EditjugadorComponent implements OnInit {

  profileForm = new FormGroup({
    nombre: new FormControl(''),
    nickname: new FormControl(''),
    email: new FormControl(''),
    fecha_nac: new FormControl('')
  });
  
 
  jugador: any = {};
  profileForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private jugadorService: JugadorService,
    private fb: FormBuilder) {
      this.createForm();
    }

  createForm() {
    this.profileForm = this.fb.group({
    nombre: new FormControl(''),
    nickname: new FormControl(''),
    email: new FormControl(''),
    fecha_nac: new FormControl('')
        });
    }

  
  ngOnInit() {
    this.route.params.subscribe(params => {
        this.jugadorService.editJugador(params['id']).subscribe(res => {
          this.jugador = res;
      });
    });
  }
  updateJugador(nombre, nickname, email, fecha_nac) {
   this.route.params.subscribe(params => {
      this.jugadorService.updateJugador(nombre, nickname, email, fecha_nac, params['id']);
      this.router.navigate(['jugadores']);
    });
    }
}
