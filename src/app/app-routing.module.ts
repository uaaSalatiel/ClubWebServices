import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Rutas posibles
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FriendsComponent } from './friends/friends.component';
import { EventsComponent } from './events/events.component';
import { ActivitiesComponent } from './activities/activities.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { NuevoEventoComponent } from './nuevo-evento/nuevo-evento.component';
import { NuevaActividadComponent } from './nueva-actividad/nueva-actividad.component';
import { NuevoRestauranteComponent } from './nuevo-restaurante/nuevo-restaurante.component';
import { NuevoPlatilloComponent } from './nuevo-platillo/nuevo-platillo.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'friends', component: FriendsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'updateuser', component: UpdateUserComponent },
  { path: 'newEvent', component: NuevoEventoComponent },
  { path: 'newActivity', component: NuevaActividadComponent },
  { path: 'newRestaurant', component: NuevoRestauranteComponent },
  { path: 'newDish', component: NuevoPlatilloComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
