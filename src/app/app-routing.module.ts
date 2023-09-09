import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresoPage } from './pages/ingreso/ingreso.page';
import { InicioPage } from './pages/inicio/inicio.page';
import { PreguntaSecretaPage } from './pages/pregunta-secreta/pregunta-secreta.page';
import { RecuperarContraseniaPage } from './pages/recuperar-contrasenia/recuperar-contrasenia.page';
import { ContraseniaIncorrectaPage } from './pages/contrasenia-incorrecta/contrasenia-incorrecta.page';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'ingreso',
    pathMatch: 'full'
  },
  {
    path: 'ingreso',
    loadChildren: () => import('./pages/ingreso/ingreso.module').then( m => m.IngresoPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'pregunta-secreta',
    loadChildren: () => import('./pages/pregunta-secreta/pregunta-secreta.module').then( m => m.PreguntaSecretaPageModule)
  },
  {
    path: 'contrasenia-incorrecta',
    loadChildren: () => import('./pages/contrasenia-incorrecta/contrasenia-incorrecta.module').then( m => m.ContraseniaIncorrectaPageModule)
  },
  {
    path: 'recuperar-contrasenia',
    loadChildren: () => import('./pages/recuperar-contrasenia/recuperar-contrasenia.module').then( m => m.RecuperarContraseniaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
