import { HolidayCardComponent } from './holiday-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { BlinkerDirectiveModule } from '../../shared/blinker-directive.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HolidayCardComponent],
  exports: [HolidayCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    RouterModule,
    BlinkerDirectiveModule,
    MatButtonModule,
  ],
})
export class HolidayCardComponentModule {}
