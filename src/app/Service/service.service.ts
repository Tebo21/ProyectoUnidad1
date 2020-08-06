import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { usuarios } from '../Modelo/usuarios';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  // aqui se realiza la coneccio al servicio usando ela direccion ofrecida por la instancia en EC2
  constructor(private http: HttpClient ) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });
 Url = 'http://52.90.208.140/api/usuarios';

 getUsers(){
   return this.http.get<usuarios[]>(this.Url);
 }
 createUsuariao(usuarios: Object): Observable<Object>{
  return this.http.post(`${this.Url}` + `/create`, usuarios)
 }
 getValidar(usuario: string, password: string) {
    return this.http.get<usuarios[]>(this.Url);
  }
  getFoto(url_foto: string) {
    return this.http.get<usuarios[]>(this.Url);
  }



}
