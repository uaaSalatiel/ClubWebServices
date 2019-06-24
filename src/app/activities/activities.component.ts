import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebServsService } from '../web-servs.service';
import { Asistencia } from '../classes/asistencia';
import { Actividad } from '../classes/actividad';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  actividades = [];
  msactiv = [];
  asist : Asistencia = {id_ev : 0, id_usr : 0};
  id_logged :string;
  is_admin :string;

  constructor(private service: WebServsService, private router: Router) { }

  ngOnInit() {
    this.id_logged = sessionStorage.getItem('userid');
    this.is_admin = sessionStorage.getItem('isAdmin');
    this.leerActividades();
    this.leerMisActividades();
  }

  leerActividades(){
    this.service.readActividad().subscribe((acts: Actividad[])=>{
      this.actividades = acts;
      console.log(this.actividades);
    });
  }

  leerMisActividades(){
    this.service.readMisActividad(this.id_logged).subscribe((mva: Actividad[])=>{
      this.msactiv = mva;
      console.log(this.msactiv);
    });
  }

  asistencia(idev: number, idus:number){
    this.asist = {id_ev : idev, id_usr: idus};
    this.service.goActividad(this.asist).subscribe((asisten: Asistencia)=>{
      console.log('Asistencia Confirmada', asisten);
      this.leerMisActividades();
    });
  }

  borrarAc(id: string){
    this.service.deleteActividad(id).subscribe((ev: Actividad)=>{
      console.log('Actividad Borrada', ev);
      this.leerActividades();
      this.leerMisActividades();
    });
  }

  declinar(idac: number, idus:number){
    this.service.quitActividad(idac,idus).subscribe((asisten: Asistencia)=>{
      console.log('Asistencia Declinada', asisten);
      this.leerActividades();
      this.leerMisActividades();
    });
  }

  logOut() {
    sessionStorage.removeItem('userid');
    sessionStorage.removeItem('isAdmin');
    this.router.navigate(['']);
  }

}
