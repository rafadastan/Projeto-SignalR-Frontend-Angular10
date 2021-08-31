import { Injectable } from '@angular/core';
import { Conta } from '../_models/conta.model';

@Injectable({
  providedIn: 'root'
})
export class ContasService {

  //atributo
  contas: Conta[] = [
    {
      idConta: 0,
      nome: 'Salario',
      valor: "1000",
      tipo: "1"
    },
    {
      idConta: 1,
      nome: 'Aluguel',
      valor: "600",
      tipo: "2"
    }
  ];

  constructor() { }

  addConta(item: Conta): void {
    const itemIndex = this.contas.length;
    item.idConta = this.getNextId();

    this.contas[itemIndex] = item;
  }

  modifyConta(item: Conta): void {
    const itemIndex = this.contas.findIndex(c => c.idConta === item.idConta);
    this.contas[itemIndex] = item;
  }

  removeConta(item: Conta): void {
    this.contas.splice(this.contas.indexOf(item), 1);
  }

  getContas(): Conta[] {
    return this.contas;
  }

  getContaById(idConta: number): Conta {
    const itemIndex = this.contas.findIndex(c => c.idConta === idConta);
    return this.contas[itemIndex];
  }

  //sequencial para o ID
  getNextId(): number {
    let maior = 0;

    this.contas.forEach(function (item) {
      if (maior === 0)
        maior = item.idConta;

      if (maior < item.idConta)
        maior = item.idConta;
    })

    return maior++;
  }

}