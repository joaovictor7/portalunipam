import { Component, OnInit } from '@angular/core';
import { ServiceRestService } from '../service/service-rest.service';
import { NavController } from '@ionic/angular';
import { Usuario } from '../model/usuario';
import { Aula } from '../model/aula';
import { RetornoAulas } from '../model/retornoAulas';
import { RetornoDisciplina } from '../model/retornoDisciplina';
import { Disciplina } from '../model/disciplina';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-aula',
  templateUrl: './aula.page.html',
  styleUrls: ['./aula.page.scss'],
})
export class AulaPage implements OnInit {
  private usuario: Usuario;
  private periodoLetivo: String;
  private listaAulas: Array<Aula>;
  private listaDisciplinas: Array<Disciplina>;
  private loading: any;

  constructor(private serviceRest: ServiceRestService,
              private navController: NavController,
              private loadingController: LoadingController
  ) { 
    this.usuario = JSON.parse(window.sessionStorage.getItem("Usuario"));
    this.periodoLetivo = window.sessionStorage.getItem("PeriodoLetivo");
    this.listaAulas = new Array<Aula>();
    this.listaDisciplinas = new Array<Disciplina>();
    this.loading = '';

    this.recuperarDisciplinas()
    this.recuperarAulas();
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

  descarregarLoading() {
    this.loading.dismiss('carregar');
  }

  async recuperarAulas() {
    await this.serviceRest.listarAulas(this.usuario.matricula, this.usuario.senha, this.periodoLetivo)
      .then((data) => {
        let retorno = Object.assign(new RetornoAulas(), data)

        if(retorno.Retorno.Autenticado !== "N") {
          this.listaAulas = retorno.Aulas;
          this.descarregarLoading();
        }
      })
      .catch((erro) => {
        console.log(erro.error.error_description);
        this.descarregarLoading();     
      });   
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

  voltar() {
    this.navController.back();
  }
}
