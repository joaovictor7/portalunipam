import { Component, OnInit } from '@angular/core';
import { ServiceRestService } from '../service/service-rest.service';
import { Usuario } from '../model/usuario';
import { RetornoPeriodoLetivo } from '../model/retornoPeriodoLetivo';
import { PeriodosLetivos } from '../model/periodoLetivo';


@Component({
  selector: 'app-periodo-letivo',
  templateUrl: './periodo-letivo.page.html',
  styleUrls: ['./periodo-letivo.page.scss'],
})
export class PeriodoLetivoPage implements OnInit {
  private usuario : Usuario;
  private listaPeriodosLetivos : Array<PeriodosLetivos>

  constructor(private serviceRest : ServiceRestService) {
    this.usuario = JSON.parse(window.sessionStorage.getItem("Usuario"));
    this.listaPeriodosLetivos = new Array<PeriodosLetivos>();
    
    this.recuperarPeriodosLetivos();
  }

  ngOnInit() {}

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

}
