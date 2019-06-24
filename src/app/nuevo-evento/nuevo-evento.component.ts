import { Component, OnInit } from '@angular/core';
import { WebServsService } from '../web-servs.service';
import { Evento } from '../classes/evento';

@Component({
  selector: 'app-nuevo-evento',
  templateUrl: './nuevo-evento.component.html',
  styleUrls: ['./nuevo-evento.component.scss']
})
export class NuevoEventoComponent implements OnInit {

  constructor(private service: WebServsService) { }

  eventos = [];
  evt : Evento;

  ngOnInit() {
    this.evt = {id:0, nombre:"", descripcion:"", fecha:"", time:""};
    this.leerEventos();
  }

  leerEventos(){
    this.service.readEvento().subscribe((events: Evento[])=>{
      this.eventos = events;
      console.log(this.eventos);
    });
  }

  readEvent(id: number){
    this.service.readOneEvento(id).subscribe((ev: Evento)=>{
      this.evt = ev;
      console.log("Evento Encontrado",this.evt);
    });
  }

  registerUpdateEvent(nvEv){
    if(nvEv.value.id == 0){
      this.service.newEvento(nvEv.value).subscribe((ev: Evento)=>{
        console.log('Evento Creado', ev);
      });
    } else {
      this.service.updateEvento(nvEv.value).subscribe((ev: Evento)=>{
        console.log('Evento Actualizado', ev);
      });
    }
  }

}
