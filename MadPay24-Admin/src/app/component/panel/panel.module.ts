import { NgModule } from '@angular/core';
import { PanelComponent } from './panel.component';
import { PanelRoutingModule } from './panel-routing.module';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './component/component/dashboard/dashboard.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { ProfileComponent } from './component/component/profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    PanelRoutingModule,
  ],
  declarations: [PanelComponent, DashboardComponent, NavbarComponent, SidebarComponent, ProfileComponent]
})
export class PanelModule { }
