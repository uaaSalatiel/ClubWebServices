import { Component, OnInit } from '@angular/core';
import { WebServsService } from '../web-servs.service';
import { Usuario } from '../classes/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: WebServsService, private router: Router) { }

  ngOnInit() {

  }

  loginUser(data) {
    this.service.loginToUser(data.value.correo,data.value.contrasena).subscribe((usr: Usuario) =>{
      if (usr.id != null){
        sessionStorage.setItem('userid', usr.id.toString());
        sessionStorage.setItem('isAdmin', usr.admin.toString());
        console.log("Usuario Logeado, ", sessionStorage.getItem('userid'));
        this.router.navigate(['friends']);
      }
      else{
        console.log("No hubo exito en la conexion.")
      }
    });
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('userid');
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('userid');
    sessionStorage.removeItem('isAdmin');
    this.router.navigate(['']);
  }

}
