import { Responsavel } from './../../model/Responsavel';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ActivatedRoute, Router } from '@angular/router';
import { GestaoService } from 'src/app/service/gestao.service';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-listar-responsaveis',
  templateUrl: './listar-responsaveis.component.html',
  styleUrls: ['./listar-responsaveis.component.scss']
})
export class ListarResponsaveisComponent implements OnInit {
  currentResponsavel: Responsavel;
  responsavel: Responsavel;

  constructor(
    private route: ActivatedRoute,
    private gestaoService: GestaoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buscar();
    this.listarResponsaveis();
  }

  listarResponsaveis(){
    this.gestaoService.listarResponsaveis().pipe(first()).subscribe(res => {
      this.responsavel = res;
  });
  }

  buscar(){
    $(document).ready(function(){
      $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myList li").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });
  }

}
