import { HolidaysComponent } from './holidays.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolidayCardComponentModule } from '../holiday-card/holiday-card.component.module';

@NgModule({
  declarations: [HolidaysComponent],
  exports: [HolidaysComponent],
  imports: [CommonModule, HolidayCardComponentModule],
})
export class HolidaysComponentModule {}
