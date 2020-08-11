import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { VehicletrackingComponent } from './vehicletracking/vehicletracking.component';
import { KidtrackerComponent } from './kidtracker/kidtracker.component';
import { RequestdemoComponent } from './requestdemo/requestdemo.component';
import { FormsModule }   from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutusComponent,
    SolutionsComponent,
    ContactusComponent,
    FooterComponent,
    VehicletrackingComponent,
    KidtrackerComponent,
    RequestdemoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
