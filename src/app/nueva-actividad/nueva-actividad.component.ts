import { Component, OnInit } from '@angular/core';
import { Actividad } from '../classes/actividad';
import { WebServsService } from '../web-servs.service';

@Component({
  selector: 'app-nueva-actividad',
  templateUrl: './nueva-actividad.component.html',
  styleUrls: ['./nueva-actividad.component.scss']
})
export class NuevaActividadComponent implements OnInit {

  constructor(private service: WebServsService) { }

  acty: Actividad;
  actividades = [];

  ngOnInit() {
    this.acty = {id_act:0, nombre:"", descripcion:"", lunes:false,
                      martes:false, miercoles:false, jueves:false, viernes:false,
                      sabado: false, domingo: false};
    this.leerActividades();
  }

  leerActividades(){
    this.service.readActividad().subscribe((acts: Actividad[])=>{
      this.actividades = acts;
      console.log(this.actividades);
    });
  }

  readActivity(id: number){
    this.service.readOneActividad(id).subscribe((act: Actividad)=>{
      this.acty = act;
      console.log("Actividad Encontrada",this.acty);
    });
  }

  registerUpdateActivity(activity){
    console.log(activity.value);
    if(activity.value.id_act == 0){
      this.service.newActividad(activity.value).subscribe((act: Actividad) =>{
        console.log('Actividad Registrada', act);
        this.leerActividades();
      });
    } else {
      this.service.updateActividad(activity.value).subscribe((act: Actividad) =>{
        console.log('Actividad Actualizada', act);
      });
    }
  }

}
