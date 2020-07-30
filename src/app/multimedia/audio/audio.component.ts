import { Component, OnInit } from '@angular/core';
import * as AWS from 'aws-sdk';
@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {

  albumBucketName = 'promusica';
  s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: { Bucket: 'promusica' },
  });

  constructor() {
    AWS.config.region = 'us-east-1'; // Región
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:e53ce7d1-41a5-4c4a-8d9e-8f9ccc70ee69',
    });
  }

  ngOnInit(): void {
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
  };

  onChange = (event) => {
    if (event.target.files.length > 0) {
      this.archivo = event.target.files[0];
    }
  };
}
