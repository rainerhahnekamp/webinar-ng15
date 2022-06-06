// SAM4SC:MCAM
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HolidaysComponent } from './holidays/holidays.component';
import { RequestInfoComponent } from './request-info/request-info.component';
import { HolidaysDataGuard } from './services/holidays-data.guard';
import { StoreModule } from '@ngrx/store';
import { holidaysFeature } from './+state/holidays.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HolidaysEffects } from './+state/holidays.effects';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        canActivate: [HolidaysDataGuard],
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
    ]),
    StoreModule.forFeature(holidaysFeature),
    EffectsModule.forFeature([HolidaysEffects]),
  ],
})
export class HolidaysModule {}
