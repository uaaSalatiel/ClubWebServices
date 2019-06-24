import { Component, OnInit } from '@angular/core';
import { WebServsService } from '../web-servs.service';
import { Restaurante } from '../classes/restaurante';
import { Menu } from '../classes/menu';

@Component({
  selector: 'app-nuevo-platillo',
  templateUrl: './nuevo-platillo.component.html',
  styleUrls: ['./nuevo-platillo.component.scss']
})
export class NuevoPlatilloComponent implements OnInit {

  constructor(private service: WebServsService) { }

  restaurants: Restaurante[];
  platillos: Menu[];
  menn: Menu;

  ngOnInit() {
    this.menn = {id_menu:0, nombre:"", precio:0, descripcion:"", id_res:0, nom_res:null};
    this.leerRestaurantes();
    this.leerPlatillos();
  }

  leerRestaurantes(){
    this.service.readRestaurnantes().subscribe((resta: Restaurante[])=>{
      this.restaurants = resta;
      console.log(this.restaurants);
    });
  }

  leerPlatillos(){
    this.service.readPlatillos().subscribe((mns: Menu[])=>{
      this.platillos = mns;
      console.log(this.platillos);
    });
  }

  readDish(id:number){
    this.service.readOnePlatillo(id).subscribe((mn: Menu)=>{
      this.menn = mn;
      console.log("Platillo Encontrado",this.menn);
    });
  }

  registerUpdateDish(nvDsh){
    if(nvDsh.value.id_menu == 0){
      this.service.createPlatillo(nvDsh.value).subscribe((mns: Menu)=>{
        console.log('Platillo Creado', mns);
      });
    } else {
      this.service.updatePlatillo(nvDsh.value).subscribe((mns: Menu)=>{
        console.log('Platillo Actualizado', mns);
      });
    }
  }

}
