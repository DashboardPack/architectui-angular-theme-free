import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-register-boxed',
  templateUrl: './register-boxed.component.html',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: []
})
export class RegisterBoxedComponent {

  constructor() { }

  onSubmit() {
    // Handle registration form submission
  }

  onTermsClick() {
    // Handle terms and conditions click
  }

}
