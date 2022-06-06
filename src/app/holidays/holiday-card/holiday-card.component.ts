import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
} from '@angular/core';
import { Holiday } from '../model/holiday';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { BlinkerDirectiveModule } from '../../shared/blinker.directive';

@Component({
  selector: 'eternal-holiday-card',
  templateUrl: './holiday-card.component.html',
  styleUrls: ['./holiday-card.component.scss'],
})
export class HolidayCardComponent {
  @Input() holiday: (Holiday & { isFavourite: boolean }) | undefined;
  @Output() addFavourite = new EventEmitter<number>();
  @Output() removeFavourite = new EventEmitter<number>();
}

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
