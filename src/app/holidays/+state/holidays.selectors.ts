import { holidaysFeature } from './holidays.reducer';
import { createSelector } from '@ngrx/store';

const selectHolidaysWithFavourite = createSelector(
  holidaysFeature.selectHolidays,
  holidaysFeature.selectFavouriteIds,
  (holidays, favouriteIds) =>
    holidays.map((holiday) => ({
      ...holiday,
      isFavourite: favouriteIds.includes(holiday.id),
    }))
);

const { selectLoadStatus } = holidaysFeature;

const selectIdTitles = createSelector(
  holidaysFeature.selectHolidays,
  (holidays) => holidays.map(({ id, title }) => ({ id, title }))
);


export const fromHolidays = {
  get: holidaysFeature.selectHolidays,
  selectHolidaysWithFavourite,
  selectIdTitles,
  selectLoadStatus,
};
