import { NgModule } from '@angular/core';
import { PanelComponent } from './panel.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { panelRoute } from './routes/routes';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(panelRoute)
  ],
  declarations: [PanelComponent]
})
export class PanelModule { }
