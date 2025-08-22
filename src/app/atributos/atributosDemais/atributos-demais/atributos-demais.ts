import { PropagaAtributos } from './../../../Serviços/propaga-atributos';
import {
  Component,
  Input,
  NgModule,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { AtributosComponent } from '../../atributos/atributos.component';

@Component({
  selector: 'app-atributos-demais',
  imports: [CommonModule, FormsModule],
  providers: [NgModule, NgModel],
  templateUrl: './atributos-demais.html',
  styleUrl: './atributos-demais.scss',
})
export class AtributosDemais implements OnInit, OnChanges {
  @Input() idGeral: string = '';
  @Input() atb!: AtributosComponent;

  saudeBase: number = 2;
  saudeTotal: number = 2;
  leveAtual: number = 2;
  moderadoAtual: number = 2;
  severoAtual: number = 2;
  mortalAtual: number = 2;
  energiaTotal: number = 1;
  energiaAtual!: number;

  constructor(private propagador: PropagaAtributos) {}
  atualizaSaude() {
    const valorAtual = this.propagador.bonusVig ?? 0;
    const bonusArquetipo = this.computarSaudeArquetipo();
    if ( valorAtual < -1) {
      let saudeTotal = this.saudeBase + valorAtual + bonusArquetipo;
      if(saudeTotal<1){ this.saudeTotal=1}else{this.saudeTotal = saudeTotal}
    } else {
      this.saudeTotal = this.saudeBase + valorAtual + bonusArquetipo;

    }
  }
  atualizaEnergia() {
    const valorVig = this.propagador.bonusVig ?? 0;
    const valorAni = this.propagador.bonusAni ?? 0;
    const energiaArq = this.computarEnergiaArquetipo();
    console.log(valorVig,valorAni,energiaArq, this.propagador.ficha);
    let nivelEnergia!: number | undefined;
    if (this.propagador.ficha && this.propagador.ficha.nivel !== undefined) {
      nivelEnergia = this.propagador.ficha.nivel + energiaArq;
    } else {
      nivelEnergia =  (this.propagador.ficha?.nivel ?? 1);
    }
    if (valorVig + valorAni < -1) {
      this.energiaTotal = nivelEnergia;
      this.energiaAtual = nivelEnergia;
    } else {
      this.energiaTotal = 1 + nivelEnergia + valorAni + valorVig;
      this.energiaAtual = 1 + nivelEnergia + valorAni + valorVig;
    }
  }
  computarSaudeArquetipo(): number {
    let saudeNivel: number = 0;

    if (this.propagador.arquetipo == 'combatente'
    ) {
      switch (this.propagador.ficha.nivel) {
        case 1:
        case 2:
        case 3:
        case 4:
          return (saudeNivel = 1);

        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
          return (saudeNivel = 2);

        case 10:
          return (saudeNivel = 3);
        default:
          return saudeNivel;
      }
    } else {
      return saudeNivel;
    }
  }
  computarEnergiaArquetipo(): number {
    let energiaNivel: number = 0;

    if (this.propagador.ficha && this.propagador.ficha.nivel !== undefined) {
      switch (this.propagador.arquetipo) {
        case 'Conjurador':
          switch (this.propagador.ficha.nivel) {
            case 1:
            case 2:
            case 3:
            case 4:
              return (energiaNivel = 2);

            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
              return (energiaNivel = 4);

            case 10:
              return (energiaNivel = 6);
            default:
              return energiaNivel;
          }
        case 'Especialista': {
          switch (this.propagador.ficha.nivel) {
            case 1:
            case 2:
            case 3:
            case 4:
              return (energiaNivel = 1);

            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
              return (energiaNivel = 2);

            case 10:
              return (energiaNivel = 3);
            default:
              return energiaNivel;
          }
        }; default: return energiaNivel;
      }
    } else {
      return energiaNivel;
    }
  }

  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['atb']) {
      this.atualizaSaude();
      this.atualizaEnergia();
    }
  }
}
