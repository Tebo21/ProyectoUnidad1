import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../Service/service.service';
import * as AWS from 'aws-sdk';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  albumBucketName = 'rostro';
  s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: { Bucket: 'rostro' },
  });

  showImagen = false;
  archivo = null
  urlImagen = null;
  error = false;
  imagenes = new Array<any>();
  url_foto = '';
  selecFoto = '';
  constructor(private router: Router, private service: ServiceService) {
    // Inicializar el proveedor de credenciales de Amazon Cognito
    AWS.config.region = 'us-east-1'; // Región
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'us-east-1:e53ce7d1-41a5-4c4a-8d9e-8f9ccc70ee69',
    });
  }

  ngOnInit(): void {
    this.muestraFoto();
  }

  // mostramos la foto de perfil en el home en al parte derecha
  muestraFoto() {s
    return this.service.getFoto(this.url_foto).subscribe(
      data => {
        console.log(data[0].url);
        this.selecFoto = data[0].url;
      },
      error => console.log(error));
  }
  private getS3Bucket(): any {
    const bucket = new AWS.S3(
      {
        apiVersion: '2006-03-01',
        params: { Bucket: 'rostro' },
      }
    );

    return bucket;
  }
  resgitrarce() {
    this.router.navigate(['registro'])
  }

  getFiles() {

    function getHtml(template) {
      return template.join('\n');
    }


    this.getS3Bucket().listObjects({ Prefix: this.archivo }, function (err, data) {
      if (err) {
        return alert('There was an error viewing your album: ' + err.message);
      }
      // 'this' references the AWS.Response instance that represents the response
      var href = this.request.httpRequest.endpoint.href;
      var bucketUrl = href + 'rostro' + '/';
      var photos = data.Contents.map(function (photo) {
        var photoKey = photo.Key;
        console.log(photoKey);
        var photoUrl = bucketUrl + encodeURIComponent(photoKey);
        return getHtml([
          '<div align="justify">',
          '<img style="width:330px;height:330px;" align="left"  src="' + photoUrl + '"/>',
          '</div>',
        ]);
      });
      var message = photos.length ?
        '' :
        '<p>There are no photos in this album.</p>';
      var htmlTemplate = [
        message,
        '<div>',
        getHtml(photos),

      ]
      document.getElementById('viewer').innerHTML = getHtml(htmlTemplate);
      document.getElementsByTagName('img')[0].setAttribute('style', 'display:none;');
    });
  }



}
