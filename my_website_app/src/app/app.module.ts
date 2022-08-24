import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms'
const appRoutes:Routes=[
  { path:'', component:HomeComponent},
  { path:'contactme', component:ContactmeComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactmeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
