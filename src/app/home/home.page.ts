import { Component } from '@angular/core';
import { ServiceRestService } from '../service/service-rest.service';
import { Usuario } from '../model/usuario';
import { RetornoHorario } from '../model/retornoHorarios';
import { Horario } from '../model/horario';
//import { RetornoPeriodoLetivo } from '../model/retornoPeriodoLetivo';
import { PeriodoLetivoService } from '../service/periodo-letivo.service';
import { PeriodosLetivos } from '../model/periodoLetivo';

import { SynchronizationService } from '../service/synchronization.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  private usuario: Usuario;
  private periodoLetivo: string;
  private listaHorarios: Array<Horario>;
  private listaPeriodosLetivos: Array<PeriodosLetivos>;

  constructor(
    private serviceRest : ServiceRestService,
    private sync:SynchronizationService,
    private periodoLetivoService: PeriodoLetivoService
  ) {
    this.usuario = JSON.parse(window.sessionStorage.getItem("Usuario"));

    this.periodoLetivo = '';
    this.listaHorarios = new Array<Horario>();
    this.listaPeriodosLetivos = new Array<PeriodosLetivos>();

    this.sync.sincronizarBanco(this.usuario);

    this.listaPeriodosLetivos = Object.assign(new Array<PeriodosLetivos>(), this.periodoLetivoService.getAll());
  }


 


  /*

  async recuperarPeriodosLetivos() {
    await this.serviceRest.listarPeriodosLetivos(this.usuario.matricula, this.usuario.senha)
    .then((data) => {
      let retorno = Object.assign(new RetornoPeriodoLetivo(), data)

      if(retorno.Retorno.Autenticado !== "N") {
        this.listaPeriodosLetivos = retorno.PeriodosLetivos;
      }
    })
    .catch((erro) => {
      console.log(erro.error.error_description);        
    });
  }

  async recuperarHorarios() {
    window.sessionStorage.setItem("PeriodoLetivo", this.periodoLetivo);

    await this.serviceRest.listarHorarios(this.usuario.matricula, this.usuario.senha, this.periodoLetivo)
    .then((data) => {
      let retorno = Object.assign(new RetornoHorario(), data)

      if(retorno.Autenticado !== "N") {
        this.listaHorarios = retorno.Horarios;
      }
    })
    .catch((erro) => {
      console.log(erro.error.error_description);        
    });
  }*/
}
