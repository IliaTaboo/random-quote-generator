import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/auth.guard';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { SigninPageComponent } from './ui/signin-page/signin-page.component';
import { LoginPageComponent } from './ui/login-page/login-page.component';
import { StartPageComponent } from './ui/start-page/start-page.component';


const routes: Routes = [
  { path: 'home', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: SigninPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '', component: StartPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
