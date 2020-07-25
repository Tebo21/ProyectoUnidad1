import { Component, OnInit } from '@angular/core';
import {usuarios} from '../Modelo/usuarios';


@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {
 
  user: usuarios [];

  constructor() { }

  ngOnInit() {
  }

}
