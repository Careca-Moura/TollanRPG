import { CommonModule } from '@angular/common';
import { Component, OnInit, NgModule } from '@angular/core';

import { RankPericia } from '../../enums/RankPericia.enum';
import { PericiasLista } from '../../enums/PericiasLista.enum';
import { FormsModule, NgModelGroup } from '@angular/forms';
import { PropagaAtributos } from '../../Serviços/propaga-atributos';
import { EventToStringPipe } from '../../Serviços/event-to-string-pipe';

@Component({
  selector: 'app-pericias',
  templateUrl: './pericias.component.html',
  styleUrls: ['./pericias.component.scss'],
  imports: [CommonModule, FormsModule],
  providers: [CommonModule, NgModule, NgModelGroup, FormsModule],
})
export class PericiasComponent implements OnInit {
  lista: string[] = Object.values(PericiasLista);
  treinamento: string[] = Object.values(RankPericia);
  listaRank: string[] = [];
  rank: string = '';
  pericia: string = '';
  bonusAtb: number = 0;

  constructor(private propaga: PropagaAtributos) {}

  completaAtb(pericia: string): string {
    const posicao = this.lista.indexOf(pericia);

    switch (posicao) {
      case 0:
      case 5: {
        this.bonusAtb = this.propaga.bonusVon ?? 0;
        return 'VON';
      }
      case 1:
      case 15:
      case 16:
      case 21: {
        this.bonusAtb = this.propaga.bonusAst ?? 0;
        return 'AST';
      }
      case 2:
      case 9:
      case 10:
      case 12:
      case 20: {this.bonusAtb = this.propaga.bonusAgi ?? 0;
        return 'AGI';
      }
      case 3:
      case 4:
      case 11:
      case 13:
      case 14:
      case 18: {
       this.bonusAtb = this.propaga.bonusFor ?? 0;
        return 'FOR';
      }
      case 6:
      case 8: {
        this.bonusAtb = this.propaga.bonusAni ?? 0;
        return 'ANI';
      }
      case 7:
      case 17:
      case 22: {this.bonusAtb = this.propaga.bonusSab ?? 0;
        return 'SAB';
      }
      case 19: {this.bonusAtb = this.propaga.bonusVig ?? 0;
        return 'VIG';
      }
      default:
        throw Error('erro de preenchimento');
    }
  }
  arquivaRank(event: Event, index: number) {
    const pipe = new EventToStringPipe();
    const rank = event.target as HTMLSelectElement;
    this.listaRank[index] = pipe.transform(rank.value);
    console.log(this.listaRank[index], index, this.listaRank.length);
  }

  capturaBonus(index: number): number {
    let bonusTotal = 0;
    let rank: string | any = this.listaRank.at(index);
    if (rank as string) {
      return (bonusTotal = parseInt(rank.match(/-?\+?\d/))) + this.bonusAtb;
    } else {
      rank = RankPericia.semTreino;
      return (bonusTotal = this.bonusAtb + parseInt(rank.match(/-?\+?\d/)));
    }
  }

  ngOnInit() {
    this.listaRank.fill(RankPericia.semTreino, 0, 22);
  }
}
