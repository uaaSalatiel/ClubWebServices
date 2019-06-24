import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from  'rxjs';

import { Usuario } from './classes/usuario';
import { Evento } from './classes/evento';
import { Asistencia } from './classes/asistencia';
import { Amigo } from './classes/amigo';
import { Actividad } from './classes/actividad';
import { Restaurante } from './classes/restaurante';
import { Reserva } from './classes/reserva';
import { Menu } from './classes/menu';

@Injectable({
  providedIn: 'root'
})

export class WebServsService {
  PHP_API_SERVER_1 = "http://192.168.0.9:8080";
  PHP_API_SERVER_2 = "http://192.168.0.4:8080";

  constructor(private httpClient: HttpClient) { }

//-------------------------------USUARIOS-------------------------------------------

  loginToUser(correo:string, contrasena:string): Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.PHP_API_SERVER_2}/api/Login.php/?correo=${correo}&contrasena=${contrasena}`);
  }

  readLogged(usr:string): Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.PHP_API_SERVER_2}/api/readLogin.php/?id=${usr}`);
  }

  createUser(usr: Usuario): Observable<Usuario>{
    console.log(usr);
    return this.httpClient.post<Usuario>(`${this.PHP_API_SERVER_2}/api/createUsuario.php`, usr);
  }

  updateUser(usr: Usuario){
    return this.httpClient.put<Usuario>(`${this.PHP_API_SERVER_2}/api/updateUsuario.php`,usr);   
  }

  deleteUser(id: string){
    return this.httpClient.delete<Usuario>(`${this.PHP_API_SERVER_2}/api/deleteUsuario.php/?id=${id}`);
  }

  //----------------------------EVENTOS-------------------------------------

  readEvento(): Observable<Evento[]>{
    return this.httpClient.get<Evento[]>(`${this.PHP_API_SERVER_2}/api/readEvento.php`);
  }

  readOneEvento(id:number): Observable<Evento>{
    return this.httpClient.get<Evento>(`${this.PHP_API_SERVER_2}/api/consultaEvento.php/?id=${id}`);
  }

  readMisEvento(id: string): Observable<Evento[]>{
    return this.httpClient.get<Evento[]>(`${this.PHP_API_SERVER_2}/api/readAsistencia_ev.php/?id_user=${id}`);
  }
  
  goEvento(evento: Asistencia){
    return this.httpClient.post<Asistencia>(`${this.PHP_API_SERVER_2}/api/createAsistencia_ev.php`, evento);
  }

  quitEvento(id_ev: number,id_us: number){
    return this.httpClient.delete<Asistencia>(`${this.PHP_API_SERVER_2}/api/deleteAsistencia_ev.php/?id_user=${id_us}&id_ev=${id_ev}`);
  }

  newEvento(evento: Evento){
    return this.httpClient.post<Evento>(`${this.PHP_API_SERVER_2}/api/createEvento.php`, evento);
  }

  updateEvento(eve: Evento){
    return this.httpClient.put<Evento>(`${this.PHP_API_SERVER_2}/api/updateEvento.php`, eve);
  }

  deleteEvento(id_ev:number){
    return this.httpClient.delete<Evento>(`${this.PHP_API_SERVER_2}/api/deleteEvento.php/?id=${id_ev}`);
  }

  //----------------------------AMIGOS-------------------------------------
  
  readUsers(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.PHP_API_SERVER_2}/api/readUsuario.php`);
  }

  readFriends(usr:string): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.PHP_API_SERVER_2}/api/readAmigo.php/?id=${usr}`);
  }

  readSolicy(usr:string): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.PHP_API_SERVER_2}/api/readSolicitud.php/?id=${usr}`);
  }

  createSol(amg: Amigo): Observable<Amigo>{
    return this.httpClient.post<Amigo>(`${this.PHP_API_SERVER_2}/api/createAmigo.php`, amg);
  }

  aceptSol(amg: Amigo){
    return this.httpClient.put<Amigo>(`${this.PHP_API_SERVER_2}/api/updateAmigo.php`, amg);   
  }

  elimAmg(id1: string, id2: string){
    return this.httpClient.delete<Amigo>(`${this.PHP_API_SERVER_2}/api/deleteAmigo.php/?id_usr1=${id1}&id_usr2=${id2}`);
  }

  //----------------------------ACTIVIDADES-------------------------------------

  readActividad(): Observable<Actividad[]>{
    return this.httpClient.get<Actividad[]>(`${this.PHP_API_SERVER_1}/api/consulta_actividad.php`);
  }

  readMisActividad(id: string): Observable<Actividad[]>{
    return this.httpClient.get<Actividad[]>(`${this.PHP_API_SERVER_1}/api/consulta_asistencia.php/?id_usr=${id}`);
  }
  
  readOneActividad(id:number): Observable<Actividad>{
    return this.httpClient.get<Actividad>(`${this.PHP_API_SERVER_1}/api/consulta_una_actividad.php/?id=${id}`);
  }
  
  goActividad(actividad: Asistencia){
    return this.httpClient.post<Asistencia>(`${this.PHP_API_SERVER_1}/api/agrega_asistencia.php`, actividad);
  }

  quitActividad(id_ev: number,id_us: number){
    return this.httpClient.delete<Asistencia>(`${this.PHP_API_SERVER_1}/api/elimina_asistencia.php/?id_usr=${id_us}&id_act=${id_ev}`);
  }

  newActividad(actividad: Actividad){
    return this.httpClient.post<Actividad>(`${this.PHP_API_SERVER_1}/api/agrega_actividad.php`, actividad);
  }

  updateActividad(acti: Actividad){
    return this.httpClient.put<Actividad>(`${this.PHP_API_SERVER_1}/api/modifica_actividad.php`, acti);
  }

  deleteActividad(id_ac:string){
    return this.httpClient.delete<Actividad>(`${this.PHP_API_SERVER_1}/api/elimina_actividad.php/?id_act=${id_ac}`);
  }

  //---------------------------------Restaurantes-------------------------------
  createRestaurnante(rest : Restaurante): Observable<Restaurante>{
    return this.httpClient.post<Restaurante>(`${this.PHP_API_SERVER_1}/api/agrega_restaurante.php`, rest);
  }

  readRestaurnantes(): Observable<Restaurante[]>{
    return this.httpClient.get<Restaurante[]>(`${this.PHP_API_SERVER_1}/api/consulta_restaurante.php`);
  }

  readOneRestaurante(id:number): Observable<Restaurante>{
    return this.httpClient.get<Restaurante>(`${this.PHP_API_SERVER_1}/api/consulta_un_restaurante.php/?id=${id}`);
  }
  
  updateRestaurante(resta: Restaurante){
    return this.httpClient.put<Restaurante>(`${this.PHP_API_SERVER_1}/api/modifica_restaurante.php`, resta);
  }

  deleteRestaurante(id_res: number){
    return this.httpClient.delete<Restaurante>(`${this.PHP_API_SERVER_1}/api/elimina_restaurante.php/?id_res=${id_res}`);
  }

  //---------------------------------RESEVA-------------------------------
  createReserva(rest : Reserva): Observable<Reserva>{
    return this.httpClient.post<Reserva>(`${this.PHP_API_SERVER_1}/api/agrega_reserva.php`, rest);
  }

  readReserva(id:string): Observable<Reserva[]>{
    return this.httpClient.get<Reserva[]>(`${this.PHP_API_SERVER_1}/api/consulta_reserva.php/?id_usr=${id}`);
  }

  deleteReserva(id_res: number, id_usr: string, fecha: string){
    return this.httpClient.delete<Reserva>(`${this.PHP_API_SERVER_1}/api/elimina_reserva.php/?id_res=${id_res}&id_usr=${id_usr}&fecha=${fecha}`);
  }

  //---------------------------------MENU-------------------------------
  createPlatillo(rest : Reserva): Observable<Menu>{
    return this.httpClient.post<Menu>(`${this.PHP_API_SERVER_1}/api/agrega_menu.php`, rest);
  }

  readPlatillos(): Observable<Menu[]>{
    return this.httpClient.get<Menu[]>(`${this.PHP_API_SERVER_1}/api/consulta_menu.php`);
  }

  readOnePlatillo(id:number): Observable<Menu>{
    return this.httpClient.get<Menu>(`${this.PHP_API_SERVER_1}/api/consulta_un_menu.php/?id=${id}`);
  }

  updatePlatillo(plat: Menu){
    return this.httpClient.put<Menu>(`${this.PHP_API_SERVER_1}/api/modifica_menu.php`, plat);
  }

  deletePlatillo(id_men: number){
    return this.httpClient.delete<Menu>(`${this.PHP_API_SERVER_1}/api/elimina_menu.php/?id_menu=${id_men}`);
  }

}
