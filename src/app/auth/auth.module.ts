import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatComponentsModule } from '../mat-components/mat-components.module';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    FlexLayoutModule,
    MatComponentsModule
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent
  ]
})
export class AuthModule { }
