import { Component, OnInit } from '@angular/core';
import { ServiceRestService } from '../service/service-rest.service'
import { Disciplina } from '../model/Disciplina';
import { RetornoDisciplina } from '../model/retornoDisciplina'
import { Usuario } from '../model/Usuario';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.page.html',
  styleUrls: ['./disciplina.page.scss'],
})
export class DisciplinaPage implements OnInit {
  listaDisciplinas : Array<Disciplina>
  usuario : Usuario;
  periodoLetivo: String;

  constructor(
              private alertController : AlertController,
              private serviceRest : ServiceRestService,
              private navController : NavController
  ) { 
    this.usuario = JSON.parse(window.sessionStorage.getItem("Usuario"));
    this.listaDisciplinas = new Array<Disciplina>();
    this.periodoLetivo = window.sessionStorage.getItem("PeriodoLetivo");
    
    this.recuperarDisciplinas();
  }

  ngOnInit() {
  }

  voltar() {
    this.navController.back();
  }

  async recuperarDisciplinas() {
    await this.serviceRest.listarDisciplinas(this.usuario.matricula, this.usuario.senha, this.periodoLetivo)
      .then((data) => {
        let retorno = Object.assign(new RetornoDisciplina(), data)

        if(retorno.Retorno.Autenticado !== "N") {
          this.listaDisciplinas = retorno.Disciplinas;
        }
      })
      .catch((erro) => {
        console.log(erro.error.error_description);        
      });    
  }
}
