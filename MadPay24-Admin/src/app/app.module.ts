import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelModule } from './panel/panel.module';
import { RouterModule } from '@angular/router';
import { adminRoute } from './routes/routes';
import { AuthModule } from './auth/auth.module';
import { ErrorInterceptorProvider } from './Services/error.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PanelModule,
    RouterModule.forRoot(adminRoute)
  ],
  providers: [ErrorInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
