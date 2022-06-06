import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, AppComponentModule } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import de from 'date-fns/locale/de';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de-AT';
import { SignUpComponentModule } from './security/sign-up/sign-up.component';

registerLocaleData(localeDe, 'de-AT');

@NgModule({
  imports: [
    AppComponentModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    SignUpComponentModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'de-AT' },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
    { provide: MAT_DATE_LOCALE, useValue: de },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
