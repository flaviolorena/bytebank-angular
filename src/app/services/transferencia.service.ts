import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  //httpclient possibilita metodos para api rest
  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }
  get transferencias() {
    return this.listaTransferencia;
  }

  //metodo get para listar todas as transferencias cadastradas no banco
  todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  //chama a geração de data e faz um post no banco
  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.hidratar(transferencia);

    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }
  //gera a data atual
  private hidratar(transferencia: Transferencia) {
    transferencia.data = new Date();
  }
}
