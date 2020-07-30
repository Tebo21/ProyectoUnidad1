import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioUsuarioComponent } from './formulario-usuario/formulario-usuario.component';
import { AudioComponent } from './multimedia/audio/audio.component';
import { DocumentosComponent } from './multimedia/documentos/documentos.component';
import { ImagenesComponent } from './multimedia/imagenes/imagenes.component';
import { VideoComponent } from './multimedia/video/video.component';


const routes: Routes = [

  {path: 'registro', component: FormularioUsuarioComponent},
  {path: 'audio', component: AudioComponent},
  {path: 'documentos', component: DocumentosComponent},
  {path: 'imagenes', component: ImagenesComponent},
  {path: 'video', component: VideoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }