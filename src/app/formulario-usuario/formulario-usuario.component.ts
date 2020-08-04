import { Component, OnInit } from '@angular/core';
import { usuarios } from '../Modelo/usuarios';
import * as AWS from 'aws-sdk';
import { Router } from '@angular/router';
import { ServiceService } from '../Service/service.service';
@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {
  albumBucketName = 'rostro';
  s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: { Bucket: 'rostro' },
  });

user1: usuarios = new usuarios();
  constructor(private service: ServiceService, private router: Router) {
    // Inicializar el proveedor de credenciales de Amazon Cognito
    AWS.config.region = 'us-east-1'; // Región
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'us-east-1:e53ce7d1-41a5-4c4a-8d9e-8f9ccc70ee69',
    });
  }

  ngOnInit() {
   
  }
 // variables
  showImagen = false;
  error = false;
  subiendo = false;

  archivo = null;

  urlImagen = null;
  submitted = false;

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

  save() {
    this.service.createUsuariao(this.user1)
    .subscribe(data => console.log(data), error => console.log(this.error));
    this.user1 = new usuarios ();
  }

  newUser(): void{
   this.submitted = false;
   this.user1 = new usuarios ();
   this.router.navigate(['home']);
   alert ('Registro correcto...');
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

}
