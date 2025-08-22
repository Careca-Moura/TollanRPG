import { NavegaOndas, IcaVelas, Pescador } from './../enums/Caminhos/Selkie';
import { Sentinela, Sombrio, Sussurro } from './../enums/Caminhos/Lunatico';

import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PropagaAtributos } from '../Serviços/propaga-atributos';
import { Identificador } from '../identificador/identificador';
import { Caminhos } from '../enums/caminhos.enum';
import {
  Emissario,
  GuardiaoGelido,
  Sacerdote,
} from '../enums/Caminhos/Chirimanta';
import { Artesao, Chifre, Paje } from '../enums/Caminhos/Cornico';
import { Presa, Arauto, Mao } from '../enums/Caminhos/Jabali';
import { Bravo, Cronista, Sabio } from '../enums/Caminhos/VIshaal';

@Component({
  selector: 'app-caminho',
  imports: [CommonModule, FormsModule],
  templateUrl: './caminho.html',
  styleUrl: './caminho.scss',
})
export class Caminho implements OnChanges {
  habilidades: string[] = [];
  @Input() id!: Identificador;

  constructor(private propagador: PropagaAtributos) {}

  incrementaNivel(nivel: number): number {
    return ++nivel;
  }
  insereHabilidades(caminho: string): void {
    switch (caminho) {
      case Caminhos.guardiao: {
        this.habilidades = Object.values(GuardiaoGelido);
        break;
      }
      case Caminhos.emissario: {
        this.habilidades = Object.values(Emissario);
        break;
      }
      case Caminhos.sacerdote: {
        this.habilidades = Object.values(Sacerdote);
        break;
      }
      case Caminhos.chifre: {
        this.habilidades = Object.values(Chifre);
        break;
      }
      case Caminhos.paje: {
        this.habilidades = Object.values(Paje);
        break;
      }
      case Caminhos.artesao: {
        this.habilidades = Object.values(Artesao);
        break;
      }
      case Caminhos.presa: {
        this.habilidades = Object.values(Presa);
        break;
      }
      case Caminhos.arauto: {
        this.habilidades = Object.values(Arauto);
        break;
      }
      case Caminhos.mao: {
        this.habilidades = Object.values(Mao);
        break;
      }
      case Caminhos.bravo: {
        this.habilidades = Object.values(Bravo);
        break;
      }
      case Caminhos.cronista: {
        this.habilidades = Object.values(Cronista);
        break;
      }
      case Caminhos.sabio: {
        this.habilidades = Object.values(Sabio);
        break;
      }
      case Caminhos.sentinela: {
        this.habilidades = Object.values(Sentinela);
        break;
      }
      case Caminhos.sussurro: {
        this.habilidades = Object.values(Sussurro);
        break;
      }
      case Caminhos.sombrio: {
        this.habilidades = Object.values(Sombrio);
        break;
      }
      case Caminhos.pescador: {
        this.habilidades = Object.values(Pescador);
        break;
      }
      case Caminhos.construtor: {
        this.habilidades = Object.values(IcaVelas);
        break;
      }
      case Caminhos.navegador: {
        this.habilidades = Object.values(NavegaOndas);
        break;
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id']) {
      this.insereHabilidades(this.id.caminho);
    }
  }
}
