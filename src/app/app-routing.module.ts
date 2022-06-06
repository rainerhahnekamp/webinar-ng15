import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { UserLoaderGuard } from './security/user-loader.guard';
import { SignUpComponent } from './security/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [UserLoaderGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      { path: 'sign-up', component: SignUpComponent },
      {
        path: 'holidays',
        loadChildren: () =>
          import('./holidays/holidays.module').then(
            (esm) => esm.HolidaysModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
