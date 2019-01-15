import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from './confirm-password.validator';
import { AngularFirestore } from '@angular/fire/firestore';
import { EmailExistValidator } from './email-exist.validator';

import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss']
})
export class SigninFormComponent implements OnInit {

  signinForm: FormGroup;

  constructor(private afs: AngularFirestore, private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.signinForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email,
        EmailExistValidator.email(this.afs)
      ]],
      password:['', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(100)
      ]],
      confirmPassword:['']
     },{
        validator: ConfirmPasswordValidator.MatchPassword
    });
  }

  signin() {
    this.auth.emailSignin(this.signinForm.value['email'], this.signinForm.value['password']);
  }

  get email() {
    return this.signinForm.get('email')
  }

  get password() {
    return this.signinForm.get('password')
  }

  get confirmPassword() {
    return this.signinForm.get('confirmPassword')
  }

}
