import { Routes, RouterModule } from '@angular/router';

export const adminRoute: Routes = [
  {  path: '', redirectTo: '/auth', pathMatch: 'full'
  },
  {  path: 'auth', redirectTo: '/auth', pathMatch: 'full'
},
{  path: 'panel', redirectTo: '/panel', pathMatch: 'full'
},
{  path: 'register', redirectTo: '/auth/register', pathMatch: 'full'
},
{  path: 'login', redirectTo: '/auth/login', pathMatch: 'full'
},
];

