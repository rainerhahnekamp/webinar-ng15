import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import { loadUserSuccess, signInUser, signOutUser } from './security.actions';
import { ANONYMOUS_USER } from './security.reducer';
import { AuthService } from '@auth0/auth0-angular';

@Injectable()
export class SecurityEffects {
  user$ = createEffect(() =>
    this.authService.user$.pipe(
      map((user) =>
        loadUserSuccess({
          user: user
            ? {
                id: user.email || '',
                email: user.email || '',
                firstname: user.given_name || '',
                name: user.family_name || '',
                anonymous: false,
              }
            : ANONYMOUS_USER,
        })
      )
    )
  );

  signInUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(signInUser),
        tap(() => this.authService.loginWithRedirect())
      ),
    { dispatch: false }
  );

  signOutUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(signOutUser),
        tap(() => this.authService.logout())
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}
}
