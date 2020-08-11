import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { ContactusComponent } from './contactus/contactus.component';
import { VehicletrackingComponent } from './vehicletracking/vehicletracking.component';
import { KidtrackerComponent } from './kidtracker/kidtracker.component';
const routes: Routes = [
  { path:"",redirectTo:"home", pathMatch: 'full' },
  {path:"home",component:HomeComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"solutions",component:SolutionsComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"vehicletracking",component:VehicletrackingComponent},
  {path:"kidtracker",component:KidtrackerComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
