import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-login-boxed',
  templateUrl: './login-boxed.component.html',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: []
})
export class LoginBoxedComponent {

  constructor() { }

  onSubmit() {
    // Handle login form submission
  }

  onForgotPassword() {
    // Handle forgot password action
  }

}
