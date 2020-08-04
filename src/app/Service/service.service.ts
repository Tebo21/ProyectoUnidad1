import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { usuarios } from '../Modelo/usuarios';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient ) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });
 Url = 'http://localhost:8080/api/usuarios';

 getUsers(){
   return this.http.get<usuarios[]>(this.Url);
 }
 // tslint:disable-next-line: no-shadowed-variable
 // tslint:disable-next-line: ban-types
 createUsuariao(usuarios: Object): Observable<Object>{
  return this.http.post(`${this.Url}` + `/create`, usuarios)
 }
 getValidar(usuario: string, password: string) {
    return this.http.get<usuarios[]>(this.Url);
  }



}
