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
                label: 'Video', icon: 'pi pi-fw pi-video',
                items: [
                    { label: 'Ver videos', icon: 'pi pi-fw pi-play' },
                    { label: 'Subir video', icon: 'pi pi-fw pi-cloud-upload' }
                ]
            },
            {
                label: 'Fotos',
                icon: 'pi pi-fw pi-camera',
                items: [
                    { label: 'Ver fotos', icon: 'pi pi-fw pi-images' },
                    { label: 'Subir foto', icon: 'pi pi-fw pi-cloud-upload' }
                ]
            },
            {
                label: 'Documentos',
                icon: 'pi pi-fw pi-file-o',
                items: [
                    { label: 'Ver documentos', icon: 'pi pi-fw pi-clone' },
                    { label: 'Subir documentos', icon: 'pi pi-fw pi-cloud-upload' }
                ]
            },
            {
                label: 'Audio',
                icon: 'pi pi-fw pi-file-o',
                items: [
                    { label: 'Audios', icon: 'pi pi-fw pi-volume-up' },
                    { label: 'Subir documentos', icon: 'pi pi-fw pi-cloud-upload' }
                ]
            }
        ];
    }
}
