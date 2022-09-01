import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { UserLoaderGuard } from './security/user-loader.guard';
import { SignUpComponent } from './security/sign-up/sign-up.component';
import { UnoptimizedComponent } from './unoptimized.component';
import { OptimizedComponent } from './optimized.component';
import { CdnComponent } from './cdn.component';

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
      { path: 'unoptimized', component: UnoptimizedComponent },
      { path: 'optimized', component: OptimizedComponent },
      { path: 'cdn', component: CdnComponent },
      { path: 'sign-up', component: SignUpComponent, title: 'Sign up' },
      {
        path: 'holidays',
        loadChildren: () =>
          import('./holidays/holidays.routes').then((m) => m.holidayRoutes),
      },
    ],
  },
];
