import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { filter, map, switchMap } from 'rxjs/operators';
import * as actions from './holidays.actions';
import { load } from './holidays.actions';
import { holidaysFeature } from './holidays.reducer';
import { Store } from '@ngrx/store';
import { asyncScheduler, scheduled } from 'rxjs';
import { holidays } from './holidays.data';

@Injectable()
export class HolidaysEffects {
  get$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.get),
      concatLatestFrom(() =>
        this.store.select(holidaysFeature.selectLoadStatus)
      ),
      filter(([, loadStatus]) => loadStatus === 'not loaded'),
      map(() => load())
    )
  );

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.load),
      switchMap(() => scheduled([holidays], asyncScheduler)),
      map((holidays) =>
        holidays.map((holiday) => ({
          ...holiday,
          imageUrl: `/assets/${holiday.imageUrl}`,
        }))
      ),
      map((holidays) => actions.loaded({ holidays }))
    )
  );

  constructor(
    private actions$: Actions,
    private httpClient: HttpClient,
    private store: Store
  ) {}
}
