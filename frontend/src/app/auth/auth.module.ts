import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthRoutes } from './auth-routing.module';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    RouterModule.forChild(AuthRoutes),
    CommonModule,
    ReactiveFormsModule
  ],
  providers:[]
})
export class AuthModule { }
