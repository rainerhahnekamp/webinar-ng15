import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HolidaysComponent } from './holidays/holidays.component';
import { RequestInfoComponent } from './request-info/request-info.component';
import { HolidaysDataGuard } from './services/holidays-data.guard';
import { StoreModule } from '@ngrx/store';
import { holidaysFeature } from './+state/holidays.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HolidaysEffects } from './+state/holidays.effects';
import { HolidayCardComponent } from './holiday-card/holiday-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [HolidaysComponent, HolidayCardComponent, RequestInfoComponent],
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
          },
          {
            path: 'request-info/:holidayId',
            component: RequestInfoComponent,
          },
        ],
      },
    ]),
    StoreModule.forFeature(holidaysFeature),
    EffectsModule.forFeature([HolidaysEffects]),
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class HolidaysModule {}
