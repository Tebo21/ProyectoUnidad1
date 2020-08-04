import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { usuarios } from '../Modelo/usuarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: ServiceService, private router: Router) { }
  private user: usuarios = {
    usuario: "",
    password: ""
  }

  enviarUsuario = '';
  enviarContra = '';
  selecUser = '';
  selectContra = '';
  lista_usuarios = new Array<any>();
  ngOnInit(): void {
  }

  onLogin() {
    this.enviarUsuario = this.selecUser;
    this.enviarContra = this.selectContra;

    return this.service.getValidar(this.enviarUsuario, this.enviarContra).subscribe(
      data => {
        this.lista_usuarios[0] = data;
        console.log(data);
        if ((this.enviarUsuario === data[0].usuario) && ( this.enviarContra === data[0].password)) {
          this.router.navigate(['/home']);
          alert('Bienvenido!');
        } else {
          alert('Usuario o Contraseña Incorrectos');
        }
      },
      error => console.log(error));
  }

}