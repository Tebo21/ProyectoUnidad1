import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioUsuarioComponent } from './formulario-usuario/formulario-usuario.component';


const routes: Routes = [

  {
    path: 'registro',
    component: FormularioUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }