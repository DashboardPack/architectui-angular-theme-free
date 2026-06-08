import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-forgot-password-boxed',
  templateUrl: './forgot-password-boxed.component.html',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: []
})
export class ForgotPasswordBoxedComponent {

  constructor() { }

  onSubmit() {
    // Handle password recovery form submission
  }

}
