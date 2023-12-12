import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReportFormComponent } from './report-form/report-form.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CrimeFormComponent } from './crime-form/crime-form.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "login", component:LoginComponent},
  {path: "report-form", component:ReportFormComponent},
  { path: "contact-us", component: ContactUsComponent },
  {path: "crime-form", component: CrimeFormComponent},
  {path: "about-us", component:AboutUsComponent},
  {path:'**',  component:HomeComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
