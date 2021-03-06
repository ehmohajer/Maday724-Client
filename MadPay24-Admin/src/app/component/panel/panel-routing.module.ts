import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from './panel.component';
import { DashboardComponent } from './component/component/dashboard/dashboard.component';
import { ProfileComponent } from './component/component/userinfo/profile/profile.component';
import { DocumentsComponent } from './component/component/userinfo/documents/documents.component';



const routes: Routes = [

    {  path: '', component: PanelComponent,
    children: [
      {path: 'dashboard' , component: DashboardComponent},
      {path: 'userinfo/profile' , component: ProfileComponent},
      {path: 'userinfo/documents' , component: DocumentsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
