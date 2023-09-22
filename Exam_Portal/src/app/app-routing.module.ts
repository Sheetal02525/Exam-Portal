import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginupComponent } from './pages/loginup/loginup.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
   {
    path:'home',
    component:HomeComponent,
    pathMatch:'full',
   },
   {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full',
  },
  {
    path:'login',
    component:LoginupComponent,
    pathMatch:'full',
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
