import { Component, OnInit } from '@angular/core';
import { usuarios } from '../Modelo/usuarios';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  constructor(private service: ServiceService) { }
  // listamos los usuarios que ingresan a la aplicacion
  user: usuarios [];
  ngOnInit(): void {
    this.service.getUsers()
    .subscribe(data => {
      this.user = data;
    }
    );
  }

}
