import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usuarios } from '../Modelo/usuarios';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient ) { }
 Url = 'http://localhost:9094/api/usuarios';

 getUsers(){
   return this.http.get<usuarios[]>(this.Url);
 }
}
