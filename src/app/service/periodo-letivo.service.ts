import { Injectable } from '@angular/core';
import { InterfaceCrud } from './interfaceCrud';
import { DatabaseService } from '../service/database.service';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';
import { PeriodosLetivos } from '../model/periodoLetivo';


@Injectable({
  providedIn: 'root'
})
export class PeriodoLetivoService implements InterfaceCrud{

  private periodosLetivos: Array<PeriodosLetivos>;

  constructor(
    private db: SQLiteObject,
    private dbService: DatabaseService
  ) { }

  getAll() {
    this.dbService.getDB()
      .then(() => {
          this.db.executeSql('SELECT * FROM periodoletivo ORDER BY CodPeriodoLetivo')
            .then((dados: any) => {
              if(dados.rows.lenght > 0) {
                for(var i=0; i < dados.rows.lenght; i++) {
                  let periodoLetivo = new PeriodosLetivos();

                  periodoLetivo.CodigoPeriodoLetivo = dados.CodigoPeriodoLetivo;
                  periodoLetivo.DescricaoPeriodoLetivo = dados.DescricaoPeriodoLetivo;
                  
                  this.periodosLetivos.push(periodoLetivo);
                }

                return this.periodosLetivos;
              }
            })
            .catch(() => { })
      })
      .catch(() => { });
  }

  get() {

  }

  add() {

  }

  update() {

  }

  drop() {

  }
}
