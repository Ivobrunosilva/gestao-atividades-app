import { AltRecorrenciaComponent } from './pages/alt-recorrencia/alt-recorrencia.component';
import { AtualizarStatusComponent } from './pages/atualizar-status/atualizar-status.component';
import { CriarDemandaComponent } from './pages/criar-demanda/criar-demanda.component';
import { FinalizarCancelarComponent } from './pages/finalizar-cancelar/finalizar-cancelar.component';
import { ListarResponsaveisComponent } from './pages/listar-responsaveis/listar-responsaveis.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { ListarAtividadeComponent } from './pages/listar-atividade/listar-atividade.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  { 
    path: 'login', 
    component: LoginLayoutComponent,
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) 
  },
  { 
    path: 'dashboard', 
    component: MainLayoutComponent,
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) 
  },
  {path: 'listar-responsaveis', component: ListarResponsaveisComponent},
  {path: 'listar-atividade', component: ListarAtividadeComponent},
  {path: 'finalizar-cancelar', component: FinalizarCancelarComponent},
  {path: 'criar-demanda', component: CriarDemandaComponent},
  {path: 'atualizar-status', component: AtualizarStatusComponent},
  {path: 'alt-recorrencia', component: AltRecorrenciaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
