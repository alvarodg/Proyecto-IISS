import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { JugadorService } from '../services/jugador.service';

@Component({
  selector: 'app-edit-jugador',
  templateUrl: './edit-jugador.component.html',
  styleUrls: ['./edit-jugador.component.scss']
})
export class EditJugadorComponent implements OnInit {

  jugador: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private jugadorService: JugadorService,
    private fb: FormBuilder) {
      this.createForm();
 }

  createForm() {
    this.angForm = this.fb.group({
        nombre: ['', Validators.required ],
        apellidos: ['', Validators.required ],
      });
    }
    
    updateJugador(nombre, apellidos, nickname, avatar, email, fecha_nac, videojuegos) {

      this.route.params.subscribe(params => {
      this.jugadorService.updateJugador(nombre, apellidos, nickname, avatar, email, fecha_nac, videojuegos, params['id']);
      this.router.navigate(['addJugador']);
        })
    }


  ngOnInit() {
     // this.updateJugador('2','2','2','assets/images/avatar0.jpg','2','2',[]);

    this.route.params.subscribe(params => {
        this.jugadorService.editJugador(params['id']).subscribe(res => {
          this.jugador = res;
      });
    });
  }
}

