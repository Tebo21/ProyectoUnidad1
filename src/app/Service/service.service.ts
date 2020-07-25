import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usuarios } from '../Modelo/usuarios';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient ) { }
 Url="aqyui po=nga su swager";

 getUsers(){
   return this.http.get<usuarios[]>(this.Url);
 }
}
