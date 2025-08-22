import { Component } from '@angular/core';
import { PericiasComponent } from '../../atributos/pericias/pericias.component';
import { AtributosComponent } from '../../atributos/atributos/atributos.component';
import { AtributosDemais } from '../../atributos/atributosDemais/atributos-demais/atributos-demais';
import { Identificador } from '../../identificador/identificador';
import { Equipamento } from '../../equipamento/equipamento';
import { Caminho } from '../../caminho/caminho';

@Component({
  selector: 'app-ficha-template',
  imports: [Identificador, AtributosComponent, AtributosDemais, PericiasComponent,Equipamento,Caminho],
  templateUrl: './ficha-template.html',
  styleUrl: './ficha-template.scss'
})
export class FichaTemplate {
  atb!: AtributosComponent;
  id: string = '';
  identificacao!: Identificador;
  fixaId(evento: Identificador) {
    this.id = evento.id;
    this.identificacao = evento;
  }
  fixaAtbPrincipal(atb: AtributosComponent) {
    this.atb = atb;
  }
}
