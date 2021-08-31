import { Component, OnInit } from '@angular/core';
import { Conta } from '../_models/conta.model';
import { ContasService } from '../_services/contas-service.service';

@Component({
  selector: 'app-contas-consulta',
  templateUrl: './contas-consulta.component.html',
  styleUrls: ['./contas-consulta.component.css']
})
export class ContasConsultaComponent implements OnInit {

  contas: Conta[] = [];

  constructor(
    private ContasService : ContasService
  ) { }

  ngOnInit(): void {
    this.contas = this.ContasService.getContas();
  }

}
