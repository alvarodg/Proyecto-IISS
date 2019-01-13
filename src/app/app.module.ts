import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import {HttpClientModule}  from '@angular/common/http';
import 'hammerjs';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { JugadorComponent } from './jugador/jugador.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { JugadorService } from './services/jugador.service';
import { AddjugadorComponent } from './addjugador/addjugador.component';


@NgModule({
  declarations: [
    AppComponent,
    JugadorComponent,
    VideojuegoComponent,
    AddjugadorComponent
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
