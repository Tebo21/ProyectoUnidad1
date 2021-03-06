import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {AccordionModule} from 'primeng/accordion';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormularioUsuarioComponent } from './formulario-usuario/formulario-usuario.component'; 

import { TableModule } from 'primeng/table';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {FileUploadModule} from 'primeng/fileupload';
import {CardModule} from 'primeng/card';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';

import { VideoComponent } from './multimedia/video/video.component';
import { AudioComponent } from './multimedia/audio/audio.component';
import { DocumentosComponent } from './multimedia/documentos/documentos.component';
import { ImagenesComponent } from './multimedia/imagenes/imagenes.component';
import { ServiceService } from './Service/service.service';
import { ContImagenesComponent } from './ContenidoMultimedia/cont-imagenes/cont-imagenes.component';
import { ContVideosComponent } from './ContenidoMultimedia/cont-videos/cont-videos.component';
import { ContDocumentosComponent } from './ContenidoMultimedia/cont-documentos/cont-documentos.component';
import { ContAudioComponent } from './ContenidoMultimedia/cont-audio/cont-audio.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    FormularioUsuarioComponent,
    VideoComponent,
    AudioComponent,
    DocumentosComponent,
    ImagenesComponent,
    ContImagenesComponent,
    ContVideosComponent,
    ContDocumentosComponent,
    ContAudioComponent,
    ListarUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    MenubarModule,
    ButtonModule,
    TableModule,
    FileUploadModule,
    CardModule,
    FormsModule,
    HttpClientModule,
    PasswordModule,
    InputTextModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
