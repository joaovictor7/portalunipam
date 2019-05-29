import { Component, OnInit } from '@angular/core';
import { ServiceRestService } from '../service/service-rest.service';
import { NavController } from '@ionic/angular';
import { Usuario } from '../model/usuario';
import { Nota } from '../model/nota';
import { RetornoNota } from '../model/retornoNota';
import { RetornoDisciplina } from '../model/retornoDisciplina';
import { Disciplina } from '../model/disciplina';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.page.html',
  styleUrls: ['./nota.page.scss'],
})
export class NotaPage implements OnInit {
  private usuario: Usuario;
  private periodoLetivo: String;
  private listaNotas: Array<Nota>;
  private listaDisciplinas: Array<Disciplina>;
  private loading: any;

  constructor(private serviceRest: ServiceRestService,
              private navController: NavController,
              private loadingController: LoadingController
  ) { 
    this.usuario = JSON.parse(window.sessionStorage.getItem("Usuario"));
    this.periodoLetivo = window.sessionStorage.getItem("PeriodoLetivo");
    this.listaNotas = new Array<Nota>();
    this.listaDisciplinas = new Array<Disciplina>();
    this.loading = '';

    this.recuperarDisciplinas()
    this.recuperarNotas();
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

  async recuperarNotas() {
    await this.serviceRest.listarNotas(this.usuario.matricula, this.usuario.senha, this.periodoLetivo)
      .then((data) => {
        let retorno = Object.assign(new RetornoNota(), data)

        if(retorno.Retorno.Autenticado !== "N") {
          this.listaNotas = retorno.Notas;
          this.descarregarLoading(); 
        }
      })
      .catch((erro) => {
        this.descarregarLoading();   
        console.log(erro.error.error_description);
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
        this.descarregarLoading(); 
        console.log(erro.error.error_description); 
      });    
  }

  voltar() {
    this.navController.back();
  }
}
