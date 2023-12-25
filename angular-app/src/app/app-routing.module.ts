import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ResourceComponent} from "./pages/resource/resource.component";
import {ReservationComponent} from "./pages/reservation/reservation.component";
import {PersonneComponent} from "./pages/personne/personne.component";

const routes: Routes = [
  {path : "ressources" , component : ResourceComponent},
  {path : "reservations" , component : ReservationComponent},
  {path : "personnes" , component : PersonneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
