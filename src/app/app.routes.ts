import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { UserLoaderGuard } from './security/user-loader.guard';
import { SignUpComponent } from './security/sign-up/sign-up.component';

export const routes: Routes = [
  {
    path: '',
    canActivate: [UserLoaderGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
        title: 'Eternal',
      },
      { path: 'sign-up', component: SignUpComponent, title: 'Sign up' },
      {
        path: 'holidays',
        loadChildren: () =>
          import('./holidays/holidays.routes').then((m) => m.holidayRoutes),
      },
    ],
  },
];
