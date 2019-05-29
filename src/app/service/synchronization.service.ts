import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Usuario } from '../model/usuario';
import { ServiceRestService } from '../service/service-rest.service';
import { DatabaseService } from '../service/database.service';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class SynchronizationService {

  constructor(
    private httpClient: HttpClient,
    private serviceRest: ServiceRestService,
    private serviceDB: DatabaseService,
    private db: SQLiteObject
  ) { }

  sincronizarBanco(usuario: Usuario) {
    this.sincronizarPeriodosLetivos(usuario);
  }

  private async sincronizarPeriodosLetivos(usuario: Usuario) {
    this.serviceRest.listarPeriodosLetivos(usuario.matricula, usuario.senha)
      .then((dados: any) => {
        //let retorno = Object.assign(new RetornoPeriodoLetivo(), dados)
        this.serviceDB.getDB()
          .then(() => {
            let sql = 'IF NOT EXISTS(SELECT CodPeriodoLetivo FROM periodoletivo WHERE CodPeriodoLetivo = ?' + 
                      'BEGIN' +
                      ' INSERT INTO periodoletivo' +
                      ' (CodPeriodoLetivo' +
                      ' Descricao)' +
                      ' VALUES' +
                      ' (?, ?)' +
                      'END'
            
            this.db.executeSql(sql, [
              dados.PeriodoLetivo.CodPeriodoLetivo,
              dados.PeriodoLetivo.CodPeriodoLetivo,
              dados.PeriodoLetivo.Descricao,
            ])
              .then(() => {
                console.log('Periodo inserido');
              })
              .catch(e => {console.log('Erro ao inserir periodo letivo', e);})
          })
          .catch(e => {console.log('Erro ao obter instância de banco de dados', e);})
      })
      .catch(e => {console.log('Erro ao obter periodos letivos', e);})
  }
}
