import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContasService } from '../_services/contas-service.service';

@Component({
  selector: 'app-contas-cadastro',
  templateUrl: './contas-cadastro.component.html',
  styleUrls: ['./contas-cadastro.component.css']
})
export class ContasCadastroComponent implements OnInit {

  message: string = "";

  constructor(
    private ContasService : ContasService
  ) { }

  formCadastro = new FormGroup({
    nome: new FormControl('',[
      Validators.required, 
      Validators.minLength(6),
      Validators.maxLength(150)
    ]),
    valor: new FormControl('', [
      Validators.required
    ]),
    tipo: new FormControl('', [
      Validators.required
    ])
  });

  get form() : any{
    return this.formCadastro.controls;
  }

  ngOnInit(): void {
  }

  onSubmit() : void{
    const conta  =  this.formCadastro.value;
    this.ContasService.addConta(conta);
    
    this.message = `Conta ${conta.nome}, cadastrado com sucesso.`;
    
    this.formCadastro.reset();
  }
}
