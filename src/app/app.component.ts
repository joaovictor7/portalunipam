import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController } from '@ionic/angular';
import { DatabaseService } from './service/database.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Disciplinas',
      url: '/disciplina',
      icon: 'list'
    },
    {
      title: 'Periodos Letivos',
      url: '/periodo-letivo',
      icon: 'list'
    },
    {
      title: 'Aulas',
      url: '/aula',
      icon: 'list'
    },
    {
      title: 'Atividades',
      url: '/atividade',
      icon: 'list'
    },
    {
      title: 'Notas',
      url: '/nota',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navController: NavController,
    private dbService: DatabaseService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.dbService.createDatabase();
    });
  }

  async voltar() {
    this.navController.back();
  }
}
