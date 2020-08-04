import {HttpClient} from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { usuarios } from '../Modelo/usuarios';

@Injectable({
    providedIn:'root'
})
export class UsuariosService{

    constructor(private http: HttpClient ) { }
    Url = 'http://localhost:9094/api/usuarios';
   
    getUsers(){
      return this.http.get<usuarios[]>(this.Url);
    }
   