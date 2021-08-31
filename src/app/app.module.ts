import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContasCadastroComponent } from './contas-cadastro/contas-cadastro.component';
import { ContasConsultaComponent } from './contas-consulta/contas-consulta.component';
import { PainelPrincipalComponent } from './painel-principal/painel-principal.component';

import { AppRoutingModule } from './app.routing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContasCadastroComponent,
    ContasConsultaComponent,
    PainelPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
