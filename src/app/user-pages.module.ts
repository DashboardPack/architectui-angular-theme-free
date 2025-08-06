import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';

// User Pages Components
import { ForgotPasswordBoxedComponent } from './DemoPages/UserPages/forgot-password-boxed/forgot-password-boxed.component';
import { LoginBoxedComponent } from './DemoPages/UserPages/login-boxed/login-boxed.component';
import { RegisterBoxedComponent } from './DemoPages/UserPages/register-boxed/register-boxed.component';

@NgModule({
  declarations: [
    ForgotPasswordBoxedComponent,
    LoginBoxedComponent,
    RegisterBoxedComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ForgotPasswordBoxedComponent,
    LoginBoxedComponent,
    RegisterBoxedComponent
  ]
})
export class UserPagesModule { }