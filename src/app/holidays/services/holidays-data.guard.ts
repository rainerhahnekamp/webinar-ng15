import { CanActivate, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as holidaysActions from "../+state/holidays.actions";
import {fromHolidays} from "../+state/holidays.selectors";

@Injectable({
  providedIn: 'root',
})
export class HolidaysDataGuard implements CanActivate {
  constructor(private store: Store) {}

  canActivate(): Observable<boolean | UrlTree> {
    this.store.dispatch(holidaysActions.get());
    return this.store.select(fromHolidays.selectLoadStatus).pipe(
      filter((loadStatus) => loadStatus === 'loaded'),
      map(() => true)
    );
  }
}
