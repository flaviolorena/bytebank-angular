import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  //recebe os dados de fora, importa de Output
  transferencias: any[];

  constructor(private service: TransferenciaService) {}

  ngOnInit() {
    //retorna um observable e esta inscrevendo na resposta do método com o "subscribe"
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferencias = transferencias;
    });
  }
}
