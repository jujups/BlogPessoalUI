
import { environment } from './../../environments/environment.prod';
import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { Usuariologin } from './../model/Usuariologin';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  userLogin: Usuariologin = new Usuariologin()

  constructor(
    private auth: AuthService,
    private router: Router
    
  ) { }

  ngOnInit() {
    window.scroll(0,0)


  }

  entrar(){
    this.auth.entrar(this.userLogin).subscribe((resp: Usuariologin)=>{
      this.userLogin = resp

      environment.token = this.userLogin.token
      environment.nome = this.userLogin.nome
      environment.foto = this.userLogin.foto
      environment.id = this.userLogin.id
      

      this.router.navigate(['/inicio'])
    }, erro =>{
      if(erro.status == 500){
        alert('Usuário ou senha estão incorretos!')
      }
    })
  }

}