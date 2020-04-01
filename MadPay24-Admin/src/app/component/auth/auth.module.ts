import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './_services/auth.service';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [
    AuthRoutingModule,
    FormsModule,
  ],
  declarations: [AuthComponent , LoginComponent , RegisterComponent] , providers: [AuthService] ,
})
export class AuthModule { }
