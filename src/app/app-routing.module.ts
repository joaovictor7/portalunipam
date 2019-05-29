import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { 
    path: 'login', 
    loadChildren: './login/login.module#LoginPageModule' 
  },
  { 
    path: 'disciplina', 
    loadChildren: './disciplina/disciplina.module#DisciplinaPageModule' 
  },
  { 
    path: 'periodo-letivo', 
    loadChildren: './periodo-letivo/periodo-letivo.module#PeriodoLetivoPageModule' 
  },
  { path: 'aula', loadChildren: './aula/aula.module#AulaPageModule' },
  { path: 'atividade', loadChildren: './atividade/atividade.module#AtividadePageModule' },
  { path: 'nota', loadChildren: './nota/nota.module#NotaPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}


