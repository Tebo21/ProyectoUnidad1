import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Home', icon: 'pi pi-fw pi-home', routerLink: 'home'
            },
            {
                label: 'Video', icon: 'pi pi-fw pi-video',
                items: [
                    { label: 'Ver videos', icon: 'pi pi-fw pi-play' , routerLink: 'lista_videos'},
                    { label: 'Subir video', icon: 'pi pi-fw pi-cloud-upload' , routerLink: 'video' }
                ]
            },
            {
                label: 'Fotos',
                icon: 'pi pi-fw pi-camera',
                items: [
                    { label: 'Ver fotos', icon: 'pi pi-fw pi-images' , routerLink: 'lista_imagenes'},
                    { label: 'Subir foto', icon: 'pi pi-fw pi-cloud-upload', routerLink: 'imagenes' }
                ]
            },
            {
                label: 'Documentos',
                icon: 'pi pi-fw pi-file-o',
                items: [
                    { label: 'Ver documentos', icon: 'pi pi-fw pi-clone' , routerLink: 'lista_documentos'},
                    { label: 'Subir documentos', icon: 'pi pi-fw pi-cloud-upload', routerLink: 'documentos' }
                ]
            },
            {
                label: 'Audio',
                icon: 'pi pi-fw pi-forward',
                items: [
                    { label: 'Audios', icon: 'pi pi-fw pi-volume-up' , routerLink: 'lista_audios'},
                    { label: 'Subir documentos', icon: 'pi pi-fw pi-cloud-upload', routerLink: 'audio' }
                ]
            },
            {
                label: 'Usuarios',
                icon: 'pi pi-fw pi-user',
                items: [
                    { label: 'Usuarios', icon: 'pi pi-fw pi-users', routerLink: 'lista_users'}
                ]
            }
        ];
    }
}
