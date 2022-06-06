import { createFeature, createReducer, on } from '@ngrx/store';
import {
  addFavourite,
  load,
  loaded,
  removeFavourite,
} from './holidays.actions';
import { Holiday } from '../model/holiday';

export interface HolidaysState {
  holidays: Holiday[];
  favouriteIds: number[];
  loadStatus: 'not loaded' | 'loading' | 'loaded';
}

const initialState: HolidaysState = {
  holidays: [],
  favouriteIds: [],
  loadStatus: 'not loaded',
};


export const holidaysFeature = createFeature({
  name: 'holidays',
  reducer: createReducer<HolidaysState>(
    initialState,
    on(load, (state) => ({
      ...state, loadStatus: "loading"
    })),
    on(loaded, (state, { holidays }) => ({
      ...state, loadStatus: "loaded", holidays
    })),
    on(addFavourite, (state, { id }) => {
      if (state.favouriteIds.includes(id)) {
        return state;
      }

      return {...state, favouriteIds: [...state.favouriteIds, id]};
    }),
    on(removeFavourite, (state, { id }) => ({
      ...state,
      favouriteIds: state.favouriteIds.filter(favouriteId => favouriteId !== id)
    }))
  ),
});
