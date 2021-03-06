import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, PreloadingStrategy } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  { path: 'auth', redirectTo: '/auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./component/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'panel',
    canActivate: [AuthGuard],
    loadChildren: () => import('./component/panel/panel.module').then(m => m.PanelModule)
  },

  { path: 'panel', redirectTo: '/panel/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
