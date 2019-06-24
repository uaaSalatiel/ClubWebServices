//Imports necesarios
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from  '@angular/forms';

//Imports para routeo
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

//Imports de Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FriendsComponent,
    EventsComponent,
    ActivitiesComponent,
    RestaurantsComponent,
    UpdateUserComponent,
    NuevoEventoComponent,
    NuevaActividadComponent,
    NuevoRestauranteComponent,
    NuevoPlatilloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    //Algunos modulos que pretenden quedarse.
    HttpClientModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
