import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuariologin } from '../model/Usuariologin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(usuarioLogin: Usuariologin): Observable<Usuariologin>{
    return this.http.post<Usuariologin>('https://localhost:8080/usuario/logar',Usuariologin)
  }

  cadastrar(usuario:Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://localhost:8080/usuario/cadastrar',Usuario)
  }
}