import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
import { VideoComponent } from './multimedia/video/video.component';
import { AudioComponent } from './multimedia/audio/audio.component';
import { DocumentosComponent } from './multimedia/documentos/documentos.component';
import { ImagenesComponent } from './multimedia/imagenes/imagenes.component';
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
    ImagenesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    MenubarModule,
    ButtonModule,
    TableModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
