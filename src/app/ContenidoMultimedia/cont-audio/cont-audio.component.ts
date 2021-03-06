import { Component, OnInit } from '@angular/core';
import * as AWS from 'aws-sdk';

@Component({
  selector: 'app-cont-audio',
  templateUrl: './cont-audio.component.html',
  styleUrls: ['./cont-audio.component.css']
})
export class ContAudioComponent implements OnInit {
 // ayuda a recibir los archivos de musica del bucket
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
    this.getFiles();
  }



  private getS3Bucket(): any {
    const bucket = new AWS.S3(
      {
        apiVersion: '2006-03-01',
        params: { Bucket: 'promusica' },
      }
    );

    return bucket;
  }

  showImagen = false;
  archivo = null
  urlImagen = null;
  error = false;


  imagenes = new Array<any>();

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
      var bucketUrl = href + 'promusica' + '/';
      var photos = data.Contents.map(function (photo) {
        var photoKey = photo.Key;
        var photoUrl = bucketUrl + encodeURIComponent(photoKey);
        return getHtml([
          '<div align="left">',
          '<h3>' + photoKey + '</h3>',
          '<audio controls>',
          '<source src="' + photoUrl + '">',
          '</audio>',
          '<hr>',
          '</div>',
        ]);
      });
      var message = photos.length ?
        '' :
        '<p>No hay audios disponibles.</p>';
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