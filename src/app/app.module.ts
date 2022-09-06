import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';

//importacao do arquivo de metadados do componente
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { HttpClientModule } from '@angular/common/http';

//importando e utilizando o padrão portugues
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt, 'pt');

//necessario declarar os componentes que serão utilizados na aplicação
@NgModule({
  // criar componentes com comando no terminal: ng generate component <nome>
  declarations: [AppComponent, NovaTransferenciaComponent, ExtratoComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  // configuração de local: moeda, horario e padrões em portugues
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
