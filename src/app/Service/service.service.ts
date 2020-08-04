import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usuarios } from '../Modelo/usuarios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient ) { }
 Url = 'http://localhost:8080/api/usuarios';

 getUsers(){
   return this.http.get<usuarios[]>(this.Url);
 }
 // tslint:disable-next-line: no-shadowed-variable
 // tslint:disable-next-line: ban-types
 createUsuariao(usuarios: Object): Observable<Object>{
  return this.http.post(`${this.Url}` + `/create`, usuarios)
 }
 getValidar(usuario: String, password: String) {
    return this.http.get<usuarios[]>(this.Url);
  }
  getByUserId(userName : String ,observe?:any=''){
      }

}
