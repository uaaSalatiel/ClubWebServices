import { Component, OnInit } from '@angular/core';
import { WebServsService } from '../web-servs.service';
import { Usuario } from '../classes/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  constructor(private service: WebServsService, private router: Router) { }

  usrr : Usuario = { id : null, nombres : null, apellidos : null,
    contrasena: null, admin: false, fec_nac: null, correo: null};
    
  id_logged :string;
  is_admin :string;

  ngOnInit() {
    this.id_logged = sessionStorage.getItem('userid');
    this.is_admin = sessionStorage.getItem('isAdmin');
    this.service.readLogged(this.id_logged).subscribe((ret: Usuario)=>{
      this.usrr = ret;
      console.log(this.usrr);
    });
  }

  updateUser(){
    this.service.updateUser(this.usrr).subscribe((policy: Usuario)=>{
      console.log("Usuario actualizado" , policy);
    });
    
    this.service.readLogged(this.id_logged).subscribe((ret: Usuario)=>{
      this.usrr = ret;
    });
  }

  borrarUser(){
    this.service.deleteUser(this.id_logged).subscribe((usb: Usuario)=>{
      console.log('Usuario Borrado', usb);
    });
    sessionStorage.removeItem('userid');
    sessionStorage.removeItem('isAdmin');
    this.router.navigate(['']);
  }

}
