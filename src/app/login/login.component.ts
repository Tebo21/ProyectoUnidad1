import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { usuarios } from '../Modelo/usuarios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private service: ServiceService) { }

  private user: usuarios = {
    usuario: "",
    password: ""
  }

  enviarName = '';
  enviarContra = '';
  selecUser = '';
  selectContra = '';
  nombreId = '';
  contraId = '';
  lista_usuarios = new Array<any>();
  ngOnInit(): void {
  }
  validaLogin() {
    this.enviarName = this.user.usuario;
    this.enviarContra = this.user.password;

    this.service.getValidar(this.user.usuario, this.user.password).subscribe(
      data => {
        //this.lista_usuarios[0] = data;
        console.log(data);
        
      },error => console.log(error));

  }
}