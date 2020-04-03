import { NgModule } from '@angular/core';
import { PanelComponent } from './panel.component';
import { PanelRoutingModule } from './panel-routing.module';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './component/component/dashboard/dashboard.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { ProfileComponent } from './component/component/userinfo/profile/profile.component';
import { DocumentsComponent } from './component/component/userinfo/documents/documents.component';

@NgModule({
  imports: [
    CommonModule,
    PanelRoutingModule,
  ],
  declarations: [PanelComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    ProfileComponent,
    DocumentsComponent
  ]
})
export class PanelModule { }
