import { Component, OnInit } from '@angular/core';
import { WebServsService } from '../web-servs.service';
import { Evento } from '../classes/evento';
import { Asistencia } from '../classes/asistencia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  eventos = [];
  msevent = [];
  asist : Asistencia = {id_ev : 0, id_usr : 0};
  id_logged :string;
  is_admin :string;

  constructor(private service: WebServsService, private router: Router) { }

  ngOnInit() {
    this.id_logged = sessionStorage.getItem('userid');
    this.is_admin = sessionStorage.getItem('isAdmin');
    this.leerEventos();
    this.leerMisEventos();
  }

  leerEventos(){
    this.service.readEvento().subscribe((events: Evento[])=>{
      this.eventos = events;
      console.log(this.eventos);
    });
  }

  leerMisEventos(){
    this.service.readMisEvento(this.id_logged).subscribe((mevents: Evento[])=>{
      this.msevent = mevents;
      console.log(this.msevent);
    });
  }

  asistencia(idev: number, idus:number){
    this.asist = {id_ev : idev, id_usr: idus};
    this.service.goEvento(this.asist).subscribe((asisten: Asistencia)=>{
      console.log('Asistencia Confirmada', asisten);
      this.leerMisEventos();
    });
  }

  borrarEv(id: number){
    this.service.deleteEvento(id).subscribe((ev: Evento)=>{
      console.log('Evento Borrado', ev);
      this.leerEventos();
      this.leerMisEventos();
    });
  }

  declinar(idev: number, idus:number){
    this.service.quitEvento(idev,idus).subscribe((asisten: Asistencia)=>{
      console.log('Asistencia Declinada', asisten);
      this.leerMisEventos();
    });
  }

  logOut() {
    sessionStorage.removeItem('userid');
    sessionStorage.removeItem('isAdmin');
    this.router.navigate(['']);
  }

}
