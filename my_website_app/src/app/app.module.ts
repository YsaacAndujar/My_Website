import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { ClipboardModule } from 'ngx-clipboard';
import { ProfessionalLifeComponent } from './professional-life/professional-life.component';
import { ProjectsComponent } from './projects/projects.component';
import { SafePipe } from './global/safe-pipe';
import { FooterComponent } from './footer/footer.component';
const appRoutes:Routes=[
  { path:'', component:HomeComponent},
  { path:'contactme', component:ContactmeComponent},
  { path:'professional', component:ProfessionalLifeComponent},
  { path:'projects', component:ProjectsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactmeComponent,
    NavbarComponent,
    ProfessionalLifeComponent,
    ProjectsComponent,
    SafePipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ClipboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
