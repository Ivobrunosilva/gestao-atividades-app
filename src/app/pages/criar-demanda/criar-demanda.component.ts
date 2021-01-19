import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-criar-demanda',
  templateUrl: './criar-demanda.component.html',
  styleUrls: ['./criar-demanda.component.scss']
})
export class CriarDemandaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
  });
    
  }
  

}
