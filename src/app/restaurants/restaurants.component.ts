import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurante } from '../classes/restaurante';
import { WebServsService } from '../web-servs.service';
import { Reserva } from '../classes/reserva';
import { Menu } from '../classes/menu';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  fecha_inicial = new Date();

  restaurants = [];
  reservas = [];
  menus = [];
  id_logged :string;
  is_admin :string;

  constructor(private service: WebServsService, private router: Router) {}

  ngOnInit() {
    this.id_logged = sessionStorage.getItem('userid');
    this.is_admin = sessionStorage.getItem('isAdmin');
    this.leerRestaurantes();
    this.leerReservas();
    this.leerPlatillos();
  }

  leerRestaurantes(){
    this.service.readRestaurnantes().subscribe((events: Restaurante[])=>{
      this.restaurants = events;
      console.log(this.restaurants);
    });
  }

  leerReservas(){
    this.service.readReserva().subscribe((resr: Reserva[])=>{
      this.reservas = resr;
      console.log(this.reservas);
    });
  }

  leerPlatillos(){
    this.service.readPlatillos().subscribe((mns: Menu[])=>{
      this.menus = mns;
      console.log(this.menus);
    });
  }

  reservation(reserv,id:number){
    reserv.value.id_res=id;
    reserv.value.id_usr=this.id_logged;
    this.service.createReserva(reserv.value).subscribe((reser: Reserva)=>{
      console.log('Reserva Creada', reser);
      this.leerReservas();
    });
  }

  deleteMenu(id:number){
    this.service.deletePlatillo(id).subscribe((mns: Menu)=>{
      console.log('Platillo Borrado', mns);
      this.leerPlatillos();
    });
  }

  deleteResr(res: Reserva){
    this.service.deleteReserva(res.id_res,this.id_logged,res.fecha).subscribe((reser: Reserva)=>{
      console.log('Reserva Eliminada', reser);
      this.leerReservas();
    });
  }

  deleteRest(id:number){
    this.service.deleteRestaurante(id).subscribe((rest: Restaurante)=>{
      console.log('Restaurante Borrado', rest);
      this.leerRestaurantes();
    });
  }

  logOut() {
    sessionStorage.removeItem('userid');
    sessionStorage.removeItem('isAdmin');
    this.router.navigate(['']);
  }

}
