import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss']
})
export class SigninPageComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  async signInWithGoogle() {
    await this.auth.googleLogin();
    return await this.afterSignIn();
  }

  private afterSignIn() {
    return this.router.navigate(['/']);
  }

}
