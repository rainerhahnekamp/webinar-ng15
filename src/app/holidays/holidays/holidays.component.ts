import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromHolidays } from '../+state/holidays.selectors';
import * as holidaysActions from '../+state/holidays.actions';
import { Holiday } from '../model/holiday';
import { CommonModule } from '@angular/common';
import { HolidayCardComponent } from '../holiday-card/holiday-card.component';

@Component({
  selector: 'eternal-holidays',
  templateUrl: './holidays.component.html',
  standalone: true,
  imports: [CommonModule, HolidayCardComponent],
})
export class HolidaysComponent {
  holidays$ = this.store.select(fromHolidays.selectHolidaysWithFavourite);

  constructor(private store: Store) {}

  addFavourite(id: number) {
    this.store.dispatch(holidaysActions.addFavourite({ id }));
  }

  removeFavourite(id: number) {
    this.store.dispatch(holidaysActions.removeFavourite({ id }));
  }

  byId(index: number, holiday: Holiday) {
    return holiday.id;
  }
}
