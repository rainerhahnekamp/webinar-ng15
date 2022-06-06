import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { holidaysFeature } from './holidays.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HolidaysEffects } from './holidays.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(holidaysFeature),
    EffectsModule.forFeature([HolidaysEffects]),
  ],
})
export class HolidaysModule {}
