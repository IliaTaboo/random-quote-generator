import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { StartPageComponent } from './start-page/start-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotificationPopupComponent } from './notification-popup/notification-popup.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SigninFormComponent } from './signin-form/signin-form.component';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [
    UserProfileComponent,
    HomePageComponent,
    LoginPageComponent,
    SigninPageComponent,
    StartPageComponent,
    NavigationComponent,
    NotificationPopupComponent,
    LoginFormComponent,
    SigninFormComponent,
  ],
  exports: [
    UserProfileComponent,
    NavigationComponent,
    NotificationPopupComponent,
  ]
})
export class UiModule { }
