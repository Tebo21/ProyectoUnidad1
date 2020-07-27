import { Component, OnInit } from '@angular/core';
import {usuarios} from '../Modelo/usuarios';
import * as AWS from 'aws-sdk';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {
  albumBucketName = 'practica1';
  s3 = new AWS.S3({
  apiVersion: '2006-03-01',
   params: { Bucket: 'practica1' },
  });

  user: usuarios [];

  constructor() { }

  ngOnInit() {
  }

  showImagen = false;
  error = false;
  subiendo = false;

  archivo = null;

  urlImagen = null;

  onClickSubir = async (event) => {
    event.preventDefault();

    if (this.archivo) {
      try {
        console.log(this.archivo);
        this.subiendo = true;
        const data = await new AWS.S3.ManagedUpload({
          params: {
            Bucket: this.albumBucketName,
            Key: this.archivo.name,
            Body: this.archivo,
            ACL: 'public-read',
          },
        }).promise();

        this.urlImagen = data.Location;
        this.subiendo = false;
        this.showImagen = true;
      } catch (error) {
        this.error = true;
        const bucle = setInterval(() => {
          this.error = false;
          clearInterval(bucle);
        }, 2000);
      }
    } else {
      alert('SELECCIONE UN ARCHIVO');
    }
  }

  onChange = (event) => {
    if (event.target.files.length > 0) {
      this.archivo = event.target.files[0];
    }
  }

}
