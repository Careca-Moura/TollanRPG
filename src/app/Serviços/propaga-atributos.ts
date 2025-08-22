import { Ficha, FichaElement } from './../model/ficha.model';
import { Identificador } from './../identificador/identificador';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnChanges, Input, SimpleChanges } from '@angular/core';
import {
  catchError,
  map,
  Observable,
  Subscriber,
  Subscription,
  switchMap,
  throwError,
} from 'rxjs';

import { AtributosComponent } from '../atributos/atributos/atributos.component';
import { AtributosDemais } from '../atributos/atributosDemais/atributos-demais/atributos-demais';

@Injectable({
  providedIn: 'root',
})
export class PropagaAtributos {
  private apiUrl = 'http://localhost:3000/ficha';
  id!: Identificador;
  atb!: AtributosComponent;
  ficha!: FichaElement;
  arquetipo: string | undefined;
  constructor(private http: HttpClient) {}
  nivelAtual: number = 1;
  bonusFor: number |undefined = 0;
  bonusAgi: number |undefined = 0;
  bonusVig: number |undefined = 0;
  bonusAst: number |undefined = 0;
  bonusSab: number |undefined = 0;
  bonusVon: number |undefined = 0;
  bonusAni: number |undefined = 0;

  transformar(
    nome: string,
    jogador: string,
    nivel: number,
    raca: string,
    arquetipo: string,
    totem: string,
    caminho: string
  ): Identificador {
    this.id.nome = nome;
    this.id.arquetipo = arquetipo;
    this.id.caminho = caminho;
    this.id.jogador = jogador;
    this.id.nivel = nivel;
    this.id.raca = raca;
    this.id.totem = totem;

    return this.id;
  }
  adicionarId(id: Identificador): Observable<FichaElement> {

    this.ficha = {
      id: id.nome,
      nome: id.nome,
      jogador: id.jogador,
      nivel: id.nivel,
      raca: id.raca,
      arquetipo: id.arquetipo,
      totem: id.totem,
      caminho: id.caminho,
    };
    this.arquetipo = this.ficha.arquetipo
    return this.recuperaDadosById(this.ficha.id as string).pipe(
  switchMap(() =>
    this.http.patch<FichaElement>(`${this.apiUrl}/${id.nome}`, this.ficha)
  ),
  catchError(err => {
    if (err.status === 404) {
      return this.http.post<FichaElement>(this.apiUrl, this.ficha);
    }
    return throwError(() => err);
  })
);
  }

  atualizaByid(
    Atb: AtributosComponent,
    idGeral: string
  ): Observable<FichaElement> {
    this.ficha = {
      forcaEscolhido: Atb.forcaEscolhido,
      agilidadeEscolhido: Atb.agilidadeEscolhido,
      vigorEscolhido: Atb.vigorEscolhido,
      astuciaEscolhido: Atb.astuciaEscolhido,
      sabedoriaEscolhido: Atb.sabedoriaEscolhido,
      vontadeEscolhido: Atb.vontadeEscolhido,
      animismoEscolhido: Atb.animismoEscolhido,
      bonusFor: Atb.capturaBonus(Atb.forcaEscolhido),
      bonusAgi: Atb.capturaBonus(Atb.agilidadeEscolhido),
      bonusVig: Atb.capturaBonus(Atb.vigorEscolhido),
      bonusAst: Atb.capturaBonus(Atb.astuciaEscolhido),
      bonusSab: Atb.capturaBonus(Atb.sabedoriaEscolhido),
      bonusVon: Atb.capturaBonus(Atb.vontadeEscolhido),
      bonusAni: Atb.capturaBonus(Atb.animismoEscolhido),
    };
    let idUrl: string = this.apiUrl + '/' + idGeral;
    console.log(idUrl, Atb.idGeral);

    this.bonusFor = this.ficha.bonusFor;
    this.bonusAgi = this.ficha.bonusAgi;
    this.bonusVig = this.ficha.bonusVig;
    this.bonusAst = this.ficha.bonusAst;
    this.bonusSab = this.ficha.bonusSab;
    this.bonusVon = this.ficha.bonusVon;
    this.bonusAni = this.ficha.bonusAni;

    return this.http.patch<FichaElement>(idUrl, this.ficha);
  }
  recuperaDadosById(id: string): Observable<FichaElement> {
    return this.http.get<FichaElement>(`${this.apiUrl}/${id}`);
  }
}
