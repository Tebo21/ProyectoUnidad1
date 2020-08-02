import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioUsuarioComponent } from './formulario-usuario/formulario-usuario.component';
import { AudioComponent } from './multimedia/audio/audio.component';
import { DocumentosComponent } from './multimedia/documentos/documentos.component';
import { ImagenesComponent } from './multimedia/imagenes/imagenes.component';
import { VideoComponent } from './multimedia/video/video.component';
import { ContVideosComponent } from '../app/ContenidoMultimedia/cont-videos/cont-videos.component';
import { ContImagenesComponent} from '../app/ContenidoMultimedia/cont-imagenes/cont-imagenes.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { HomeComponent } from './home/home.component';
import { ContDocumentosComponent } from './ContenidoMultimedia/cont-documentos/cont-documentos.component';
import { ContAudioComponent } from './ContenidoMultimedia/cont-audio/cont-audio.component';


const routes: Routes = [

  {path: 'registro', component: FormularioUsuarioComponent},
  {path: 'audio', component: AudioComponent},
  {path: 'documentos', component: DocumentosComponent},
  {path: 'imagenes', component: ImagenesComponent},
  {path: 'video', component: VideoComponent},
  {path: 'home', component: HomeComponent},
  {path: 'lista_imagenes', component: ContImagenesComponent},
  {path: 'lista_users', component: ListarUsuariosComponent},
  {path: 'lista_documentos', component: ContDocumentosComponent},
  {path: 'lista_videos', component: ContVideosComponent },
  {path: 'lista_audios', component: ContAudioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }