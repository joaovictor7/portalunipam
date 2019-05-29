import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { RetornoAutenticacao } from '../model/retornoAutenticacao';
import { AlertController, NavController } from '@ionic/angular';
import { ServiceRestService } from '../service/service-rest.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario : Usuario;
  mensagem : String;

  constructor(
    private alertCtrl : AlertController,
    private navCtrl : NavController, 
    private servicoRest : ServiceRestService
  ) { 
    this.usuario = new Usuario();
  }

  ngOnInit() {
  }

  async mostrarMensagem(textoMensagem : string) {
    const alert = await this.alertCtrl.create({
      header: 'Atenção', 
      message: textoMensagem,
      buttons: ['OK']
    });

    await alert.present();
  }

  async autenticarUsuario()
  {
     if (this.usuario.matricula.trim() == "")
     {
       this.mensagem = "Favor informar o usuário";
       this.mostrarMensagem(this.mensagem.toString());
       return;
     }

     if (this.usuario.senha.trim() == "")
     {
       this.mensagem = "Favor informar a senha";
       this.mostrarMensagem(this.mensagem.toString());
       return;
     }
     this.mensagem = "";

    await this.servicoRest.autenticarUsuario(
      this.usuario.matricula.trim(), 
      this.usuario.senha.trim()
    )
      .then((data)=> {                        
          console.log(data);
          let retorno = Object.assign(new RetornoAutenticacao(), data) 
          if (retorno.Autenticado === "N")
          {
              this.mensagem = retorno.Mensagem
          }
          else
          {
            this.usuario.nomeUsuario = retorno.Nome;
          }
      })
      .catch((erro)=> {
          //console.log(erro.error.error_description);
          this.mensagem= erro.error.error_description;               
      });

     if (this.mensagem.trim() != "")
        {
           this.mostrarMensagem(this.mensagem.toString());
           return;
        }

     window.sessionStorage.setItem("Usuario", JSON.stringify(this.usuario));
     console.log('aqui')
     this.navCtrl.navigateForward('home')
         // Valida se o usuário tem acesso ao sistema e se a senha é valida.    
  }

}
