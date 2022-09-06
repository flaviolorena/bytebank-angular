import { TransferenciaService } from './../services/transferencia.service';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { Router } from '@angular/router';

//decorator, arquivo de metadados que será exportado em app.module
@Component({
  //nome do seletor
  selector: 'app-nova-transferencia',
  //arquivo de renderização
  templateUrl: './nova-transferencia.component.html',
  //arquivo de estilização
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  //metadata
  //propaga o evento para fora do componente
  @Output() aoTransferir = new EventEmitter<any>();

  //declaração das propriedades
  valor: number = 12;
  destino: number = 111;

  constructor(private service: TransferenciaService, private router: Router) {}

  //declaração dos metodos
  transferir() {
    console.log('solicitada transferencia');

    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };

    //retorno do observable, usando subscribe
    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limparCampos();
        this.router.navigateByUrl('extrato');
      },
      (error) => console.error(error)
    );
  }
  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
