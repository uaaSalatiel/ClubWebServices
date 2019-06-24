import { Component, OnInit } from '@angular/core';
import { WebServsService } from '../web-servs.service';
import { Usuario } from '../classes/usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private service: WebServsService) { }

  ngOnInit() {
  }

  registerUser(nvs) {
    if(nvs.value.admin){
      nvs.value.admin = "S"
    } else {
      nvs.value.admin = "N"
    }
    this.service.createUser(nvs.value).subscribe((usr: Usuario) =>{
      console.log("Usuario Creado, ", usr);
    });
  }

}
