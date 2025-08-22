import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Caminhos } from '../enums/caminhos.enum';
import { Totem } from '../enums/totem.enum';
import { PropagaAtributos } from '../Serviços/propaga-atributos';

@Component({
  selector: 'app-identificador',
  imports: [FormsModule],
  providers: [NgModule, FormsModule, ReactiveFormsModule],
  templateUrl: './identificador.html',
  styleUrl: './identificador.scss',
})
export class Identificador {
  @Output() enviaId = new EventEmitter<Identificador>();
  id: string = '';
  nome = '';
  jogador = '';
  nivel = 1;
  raca = '';
  arquetipo = '';
  caminho = 'escolha sua raça e arquétipo';
  totem = 'escolha sua raça';
  caminhoCombatente: string = '';
  caminhoConjurador: string = '';
  caminhoEspecialista: string = '';
  constructor(private propaga: PropagaAtributos) {}
  preencheArquetipos(raca: string) {
    switch (raca) {
      case 'cornico':
        (this.caminhoCombatente = Caminhos.chifre),
          (this.caminhoEspecialista = Caminhos.artesao),
          (this.caminhoConjurador = Caminhos.paje),
          (this.totem = Totem.carvalhoBranco);

        break;
      case 'chirimanta':
        (this.caminhoCombatente = Caminhos.guardiao),
          (this.caminhoEspecialista = Caminhos.emissario),
          (this.caminhoConjurador = Caminhos.sacerdote),
          (this.totem = Totem.nagari);
        break;
      case 'jabali':
        (this.caminhoCombatente = Caminhos.presa),
          (this.caminhoEspecialista = Caminhos.arauto),
          (this.caminhoConjurador = Caminhos.mao),
          (this.totem = Totem.caapora);
        break;
      case 'lunatico':
        (this.caminhoCombatente = Caminhos.sentinela),
          (this.caminhoEspecialista = Caminhos.sussurro),
          (this.caminhoConjurador = Caminhos.sombrio),
          (this.totem = Totem.suindara);
        break;
      case 'vishaal':
        (this.caminhoCombatente = Caminhos.bravo),
          (this.caminhoEspecialista = Caminhos.cronista),
          (this.caminhoConjurador = Caminhos.sabio),
          (this.totem = Totem.ataksak);
        break;
      case 'selkie':
        (this.caminhoCombatente = Caminhos.pescador),
          (this.caminhoEspecialista = Caminhos.construtor),
          (this.caminhoConjurador = Caminhos.navegador),
          (this.totem = Totem.kumbarana);
        break;
    }

    this.preencheCaminho(this.arquetipo);
  }
  preencheCaminho(arquetipo: string): String {
    switch (arquetipo) {
      case 'combatente':
        this.caminho = this.caminhoCombatente;
        break;
      case 'conjurador':
        this.caminho = this.caminhoConjurador;
        break;
      case 'especialista':
        this.caminho = this.caminhoEspecialista;
        break;
    }
    return this.caminho;
  }

  gravarIdentificador(): any {
    //grava dados de identificação da ficha no ficha.json usando o metodo do serviço propaga ID//
    const resultado = new Identificador(this.propaga);
    resultado.id = this.nome;
    resultado.nome = this.nome;
    resultado.jogador = this.jogador;
    resultado.nivel = this.nivel;
    resultado.raca = this.raca;
    resultado.arquetipo = this.arquetipo;
    resultado.totem = this.totem;
    resultado.caminho = this.caminho;
    console.log(resultado, this.nome);
    ;
    if (this.verificaNome(resultado.nome) == true) {
      this.enviaId.emit(resultado)
     return this.propaga.adicionarId(resultado).subscribe(dado=>{alert(`${dado.nome} salvo com sucesso!`)})
    } else {
      console.log('diarreia');
    }
  }
  verificaNome(nome: string): boolean {
    //verifica se a ficha possui nome valido, caso contrario emite alerta de erro//
    if (nome !== undefined) {
      return true;
    } else {
      return false;
    }
  }
}
