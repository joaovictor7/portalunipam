import { Component, OnInit } from '@angular/core';
import { ServiceRestService } from '../service/service-rest.service';
import { NavController } from '@ionic/angular';
import { Usuario } from '../model/usuario';
import { Atividade } from '../model/atividade';
import { RetornoAtividades } from '../model/retornoAtividades';
import { RetornoDisciplina } from '../model/retornoDisciplina';
import { Disciplina } from '../model/disciplina';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.page.html',
  styleUrls: ['./atividade.page.scss'],
})
export class AtividadePage implements OnInit {
  private usuario: Usuario;
  private periodoLetivo: String;
  private listaAtividades: Array<Atividade>;
  private listaDisciplinas: Array<Disciplina>;
  private loading: any;

  constructor(private serviceRest: ServiceRestService,
    private navController: NavController,
    private loadingController: LoadingController
    ) { 
      this.usuario = JSON.parse(window.sessionStorage.getItem("Usuario"));
      this.periodoLetivo = window.sessionStorage.getItem("PeriodoLetivo");
      this.listaAtividades = new Array<Atividade>();
      this.listaDisciplinas = new Array<Disciplina>();
      this.loading = '';

      this.recuperarDisciplinas()
      this.recuperarAtividades();
    }

  ngOnInit() {
  }

  async mostarLoading() {
    this.loading = await this.loadingController.create({
      message: 'Aguarde',
      translucent: true,
      // duration: 1000,
      id: 'carregar'
    });
    await this.loading.present();
  }

  voltar() {
    this.navController.back();
  }

  descarregarLoading() {
    this.loading.dismiss('carregar');
  }

  async recuperarDisciplinas() {
    await this.mostarLoading();

    await this.serviceRest.listarDisciplinas(this.usuario.matricula, this.usuario.senha, this.periodoLetivo)
      .then((data) => {
        let retorno = Object.assign(new RetornoDisciplina(), data)

        if(retorno.Retorno.Autenticado !== "N") {
          this.listaDisciplinas = retorno.Disciplinas;
        }
      })
      .catch((erro) => {
        console.log(erro.error.error_description);
        this.descarregarLoading();      
      });    
  }

  async recuperarAtividades() {
    await this.serviceRest.listarAtividades(this.usuario.matricula, this.usuario.senha, this.periodoLetivo)
      .then((data) => {
        let retorno = Object.assign(new RetornoAtividades(), data)

        if(retorno.Retorno.Autenticado !== "N") {
          this.listaAtividades = retorno.Atividades;
          this.descarregarLoading();
        }
      })
      .catch((erro) => {
        console.log(erro.error.error_description);
        this.descarregarLoading();     
      });   
  }

}
