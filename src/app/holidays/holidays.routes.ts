// SAM4SC:MCAM
import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';
import { HolidaysComponent } from './holidays/holidays.component';
import { RequestInfoComponent } from './request-info/request-info.component';
import { HolidaysDataGuard } from './services/holidays-data.guard';
import { StoreModule } from '@ngrx/store';
import { holidaysFeature } from './+state/holidays.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HolidaysEffects } from './+state/holidays.effects';

export const holidayRoutes: Routes = [
  {
    path: '',
    canActivate: [HolidaysDataGuard],
    providers: [
      importProvidersFrom([
        StoreModule.forFeature(holidaysFeature),
        EffectsModule.forFeature([HolidaysEffects]),
      ]),
    ],
    children: [
      {
        path: '',
        component: HolidaysComponent,
        title: 'Holidays',
      },
      {
        path: 'request-info/:holidayId',
        component: RequestInfoComponent,
        title: 'Request more info',
      },
    ],
  },
];
