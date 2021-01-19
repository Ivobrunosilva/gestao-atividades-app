import { Responsavel } from './../../model/Responsavel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GestaoService } from 'src/app/service/gestao.service';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listar-atividade',
  templateUrl: './listar-atividade.component.html',
  styleUrls: ['./listar-atividade.component.scss']
})
export class ListarAtividadeComponent implements OnInit {

 a = 0;
 responsavel: Responsavel;
 subscription: Subscription;
 currentUser: any;
 cdPessoa: any;

 atividades: any;
 
  constructor(
    private route: ActivatedRoute,
    private gestaoService: GestaoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.gestaoService.atualizarAtividadesObservable.subscribe(res =>{
      this.listarAtividades();
    });

    this.listarAtividades();
  }

  listarAtividades(){
    if(this.currentUser && this.currentUser.cdPessoa){
      this.cdPessoa = this.currentUser.cdPessoa;
    }

    this.gestaoService.listarAtividades(this.cdPessoa).pipe(first()).subscribe(res => {
      this.atividades = res;
      // console.log(res);
    });
  }

  atividade(){
    this.a = 1;
  }

  voltar(){
    this.a = 0;
  }
}
