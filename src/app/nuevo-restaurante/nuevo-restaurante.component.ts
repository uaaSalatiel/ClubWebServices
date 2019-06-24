import { Component, OnInit } from '@angular/core';
import { WebServsService } from '../web-servs.service';
import { Restaurante } from '../classes/restaurante';

@Component({
  selector: 'app-nuevo-restaurante',
  templateUrl: './nuevo-restaurante.component.html',
  styleUrls: ['./nuevo-restaurante.component.scss']
})
export class NuevoRestauranteComponent implements OnInit {

  restaurants: Restaurante[];
  rst : Restaurante;

  constructor(private service: WebServsService) { }

  ngOnInit() {
    this.rst = {id_res:0, nombre:"", ubicacion:"", hora_fin:"", hora_ini:""}
    this.leerRestaurantes();
  }
  
  leerRestaurantes(){
    this.service.readRestaurnantes().subscribe((events: Restaurante[])=>{
      this.restaurants = events;
      console.log(this.restaurants);
    });
  }

  readRest(id:number){
    this.service.readOneRestaurante(id).subscribe((rtt: Restaurante)=>{
      this.rst = rtt;
      console.log("Restaurante Encontrado",this.rst);
    });
  }

  registerUpdateRest(reserv){
    if(reserv.value.id_res == 0){
      this.service.createRestaurnante(reserv.value).subscribe((rest: Restaurante)=>{
        console.log('Restaurante Creado', rest);
      });
    } else {
      this.service.updateRestaurante(reserv.value).subscribe((rest: Restaurante)=>{
        console.log('Restaurante Actualizado', rest);
      });
    }
  }

}
