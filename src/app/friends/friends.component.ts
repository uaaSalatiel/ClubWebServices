import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../classes/usuario';
import { Amigo } from '../classes/amigo';
import { WebServsService } from '../web-servs.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  users : Usuario[];
  friends : Usuario[];
  solicy : Usuario[];
  id_logged :string;
  is_admin :string;

  fr : Amigo = {id_usr1:"",id_usr2:"",estado:""};

  constructor(private service: WebServsService, private router: Router) { }

  ngOnInit() {
    this.id_logged = sessionStorage.getItem('userid');
    this.is_admin = sessionStorage.getItem('isAdmin');
    this.leerUsuarios();
    this.leerAmigos();
    this.leerSolicitudes();
  }

  leerUsuarios(){
    this.service.readUsers().subscribe((usua: Usuario[])=> {
      this.users = usua;
      console.log(this.users);
    });
  }

  leerAmigos(){
    this.service.readFriends(this.id_logged).subscribe((frie: Usuario[])=> {
      this.friends = frie;
      console.log(this.friends);
    });
  }

  leerSolicitudes(){
    this.service.readSolicy(this.id_logged).subscribe((sols: Usuario[])=> {
      this.solicy = sols;
      console.log(this.solicy);
    });
  }

  solicitud(am:string,us:string){
    this.fr = {id_usr1:am,id_usr2:us,estado:"N"};
    this.service.createSol(this.fr).subscribe((amg: Amigo) =>{
      console.log("Amistad Solicitada, ", amg);
      this.leerSolicitudes();
    });
  }

  aceptar(am:string,us:string){
    this.fr = {id_usr1:am,id_usr2:us,estado:"S"};
    this.service.aceptSol(this.fr).subscribe((amg: Amigo) =>{
      console.log("Amistad Aceptada, ", amg);
      this.leerAmigos();
      this.leerSolicitudes();
    });
  }

  eliminar(am:string,us:string){
    this.service.elimAmg(am,us).subscribe((amg: Amigo) =>{
      console.log("Amistad Olvidada, ", amg);
      this.leerAmigos();
      this.leerSolicitudes();
    });
  }

  logOut() {
    sessionStorage.removeItem('userid');
    sessionStorage.removeItem('isAdmin');
    this.router.navigate(['']);
  }

}
