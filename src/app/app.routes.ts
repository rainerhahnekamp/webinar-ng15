import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { UnoptimizedComponent } from './prepared/unoptimized.component';
import { OptimizedComponent } from './prepared/optimized.component';
import { CdnComponent } from './prepared/cdn.component';
import {HolidaysComponent} from "./holidays.component";

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HolidaysComponent,
        title: 'Eternal',
      },
      { path: 'unoptimized', component: UnoptimizedComponent },
      { path: 'optimized', component: OptimizedComponent },
      { path: 'cdn', component: CdnComponent },
    ],
  },
];
