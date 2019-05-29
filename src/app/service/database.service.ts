import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private sqLite: SQLite) { }

  public getDB() {
    let db = this.sqLite.create({
      name: 'unipam.db',
      location: 'default'
    });
    return db;
  }
  
  public createDatabase() {
    return this.getDB()
      .then((db: SQLiteObject) => {
  
        this.createTables(db);
  
      })
      .catch(e => console.log(e));
  }

  private createTables(db: SQLiteObject) {
    db.sqlBatch([
      ['CREATE TABLE IF NOT EXISTS periodoletivo' + 
       '(CodPeriodoLetivo varchar(20) primary key NOT NULL,' + 
       ' Descricao VARCHAR (100))'],
      ['CREATE TABLE IF NOT EXISTS horario' + 
       '(idHorario integer PRIMARY KEY AUTOINCREMENT NOT NULL,' +
       ' CodPeriodoLetivo varchar(20) not null primary key,' +
       ' NumeroDiaSemana integer not null,' +
       ' DescricaoDiaSemana varchar(10) not null,' +
       ' HorarioInicio time not null,' +
       ' HorarioFim time not null' +
       ' CodDisciplina integer not null)'
      ],
      ['CREATE TABLE IF NOT EXISTS disciplina' + 
       '(CodDisciplina integer PRIMARY KEY NOT NULL,' +
       ' NomeDisciplina varchar(80) not null primary key,' +
       ' NumeroDiaSemana integer not null,' +
       ' CodTurma varchar(10) not null)'
      ],
      ['CREATE TABLE IF NOT EXISTS nota' + 
       '(CodNota integer PRIMARY KEY NOT NULL,' +
       ' NomeAvalicao varchar(100) not null,' +
       ' ValorAluno decimal null,' +
       ' ValorAvaliacao decimal null,' +
       ' CodDisciplina int not null)'
      ],
      ['CREATE TABLE IF NOT EXISTS atividade' + 
       '(CodAtividade integer PRIMARY KEY NOT NULL,' +
       ' DataInicio date not null,' +
       ' DataFim date not null,' +
       ' HoraFim time not null,' +
       ' IndicadorParticipacao char(1) not null,' +
       ' CodDisciplina int not null)'
      ],
      ['ALTER TABLE horario ADD CONSTRAINT FK_horario_disciplina FOREIGN KEY (CodDisciplina) REFERENCES disciplina (CodDisciplina)'],
      ['ALTER TABLE nota ADD CONSTRAINT FK_nota_disciplina FOREIGN KEY (CodDisciplina) REFERENCES disciplina (CodDisciplina)'],
      ['ALTER TABLE atividade ADD CONSTRAINT FK_atividade_disciplina FOREIGN KEY (CodDisciplina) REFERENCES disciplina (CodDisciplina)']
    ])
      .then((data: any) => console.log('Tabelas criadas'))
      .catch(e => console.error('Erro ao criar as tabelas', e))
  }


}
