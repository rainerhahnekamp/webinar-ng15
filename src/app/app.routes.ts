import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { UnoptimizedComponent } from './unoptimized.component';
import { OptimizedComponent } from './optimized.component';
import { CdnComponent } from './cdn.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
        title: 'Eternal',
      },
      { path: 'unoptimized', component: UnoptimizedComponent },
      { path: 'optimized', component: OptimizedComponent },
      { path: 'cdn', component: CdnComponent },
    ],
  },
];
