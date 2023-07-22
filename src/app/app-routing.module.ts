import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassengerComponent } from './passenger-component/passenger.component';

const routes: Routes = [
  {path:"" , redirectTo:"passengers", pathMatch:"full"},
  {path:"passengers", component:PassengerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
