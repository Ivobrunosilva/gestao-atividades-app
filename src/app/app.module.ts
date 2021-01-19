import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';

import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { ListarResponsaveisComponent } from './pages/listar-responsaveis/listar-responsaveis.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListarAtividadeComponent } from './pages/listar-atividade/listar-atividade.component';
import { FinalizarCancelarComponent } from './pages/finalizar-cancelar/finalizar-cancelar.component';
import { AtualizarStatusComponent } from './pages/atualizar-status/atualizar-status.component';
import { CriarDemandaComponent } from './pages/criar-demanda/criar-demanda.component';
import { AltRecorrenciaComponent } from './pages/alt-recorrencia/alt-recorrencia.component';
import { CommonModule } from '@angular/common';
import {CalendarModule} from 'primeng/calendar';
import { HttpClientModule } from '@angular/common/http'; 
import * as $ from 'jquery';


@NgModule({
  declarations: [
    AppComponent,
    LoginLayoutComponent,
    MainLayoutComponent,
    ListarResponsaveisComponent,
    ListarAtividadeComponent,
    FinalizarCancelarComponent,
    AtualizarStatusComponent,
    CriarDemandaComponent,
    AltRecorrenciaComponent
  ],
  imports: [
    BadgeModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    NgbModule,
    CommonModule,
    CalendarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
