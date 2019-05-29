import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class ServiceRestService {

  constructor(private httpClient : HttpClient) { }

  async autenticarUsuario(matricula : String, senha : String){
    var dados = {
      Matricula : matricula,
      Senha : senha
    }
    var url = "http://ws.unipam.edu.br/ServicoPortalAula/PortalAluno/Autenticar";
     
    return await this.httpClient.post(url, dados, {
          headers: new HttpHeaders()
            .set('Content-Type', 'application/json')
        }).toPromise();
  }

  async listarAulas(matricula: String, senha: String, periodoLetivo: String){
    var dados = {
      Autenticacao:{
        Matricula : matricula,
        Senha: senha
      },
      PeriodoLetivo : periodoLetivo
    }

    console.log(periodoLetivo)
    var url = "http://ws.unipam.edu.br/ServicoPortalAula/PortalAluno/Aulas";
     
    return await this.httpClient.post(url, dados, {
          headers: new HttpHeaders()
            .set('Content-Type', 'application/json')
        }).toPromise();
  }

  async listarDisciplinas(matricula: String, senha: String, periodoLetivo: String){
    var dados = {
      Autenticacao: {
        Matricula: matricula,
        Senha: senha
      },
      PeriodoLetivo: periodoLetivo 
    };

    var url = "http://ws.unipam.edu.br/ServicoPortalAula/PortalAluno/Disciplinas"
     
    return await this.httpClient.post(url, dados, {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
    }).toPromise();
  }

  async listarPeriodosLetivos(matricula: String, senha: String) {
    var dados = {
                  Matricula: matricula,
                  Senha: senha
                }
  
    var url = "http://ws.unipam.edu.br/ServicoPortalAula/PortalAluno/ListarPeriodosLetivos";
  
    return await this.httpClient.post(url, dados, {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
    }).toPromise();
  }

  async listarHorarios(matricula: String, senha: String, periodoLetivo: String) {
    var dados = {
      Autenticacao: {
        Matricula: matricula,
        Senha: senha
      },
      PeriodoLetivo: periodoLetivo
    }
  
    var url = "http://ws.unipam.edu.br/ServicoPortalAula/PortalAluno/ListarHorarios";
  
    return await this.httpClient.post(url, dados, {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
    }).toPromise();
  }

  async listarNotas(matricula: String, senha: String, periodoLetivo: String){
    var dados = {
      Autenticacao: {
        Matricula: matricula,
        Senha: senha
      },
      PeriodoLetivo: periodoLetivo 
    };

    var url = "http://ws.unipam.edu.br/ServicoPortalAula/PortalAluno/Notas"
     
    return await this.httpClient.post(url, dados, {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
    }).toPromise();
  }

  async listarAtividades(matricula: String, senha: String, periodoLetivo: String){
    var dados = {
      Autenticacao:{
        Matricula : matricula,
        Senha: senha
      },
      PeriodoLetivo : periodoLetivo
    }

    console.log(periodoLetivo)
    var url = "http://ws.unipam.edu.br/ServicoPortalAula/PortalAluno/Atividades";
     
    return await this.httpClient.post(url, dados, {
          headers: new HttpHeaders()
            .set('Content-Type', 'application/json')
        }).toPromise();
  }
}
