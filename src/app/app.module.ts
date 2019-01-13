import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import {HttpClientModule}  from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { ReactiveFormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { JugadorComponent } from './jugador/jugador.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { JugadorService } from './services/jugador.service';
import { EditJugadorComponent } from './edit-jugador/edit-jugador.component';
import { AddJugadorComponent } from './add-jugador/add-jugador.component';


@NgModule({
  declarations: [
    AppComponent,
    JugadorComponent,
    VideojuegoComponent,
    EditJugadorComponent,
    AddJugadorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    HttpClientModule,
    MatSelectModule,
    MatSlideToggleModule,
    ReactiveFormsModule
    
  ],
  providers: [JugadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
