import { createAction, props } from '@ngrx/store';
import { User } from './security.reducer';

export const loadUserSuccess = createAction(
  '[Security] User Loaded',
  props<{ user: User }>()
);
export const signInUser = createAction('[Security] Sign-In User');

export const signInUserSuccess = createAction(
  '[Security] Sign-In User Success',
  props<{ user: User }>()
);
export const signOutUser = createAction('[Security] Sign-Out User');
export const signOutUserSuccess = createAction(
  '[Security] Sign-Out User Success',
  props<{ user: User }>()
);
