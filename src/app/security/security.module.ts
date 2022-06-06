import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SecurityEffects } from './+state/security.effects';
import { securityFeature } from './+state/security.reducer';
import { AuthModule } from '@auth0/auth0-angular';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDateFnsModule } from '@angular/material-date-fns-adapter';

@NgModule({
  imports: [
    StoreModule.forFeature(securityFeature),
    EffectsModule.forFeature([SecurityEffects]),
    CommonModule,
    AuthModule.forRoot({
      domain: 'dev-xbu2-fid.eu.auth0.com',
      clientId: 'YgUoOMh2jc4CQuo8Ky9PS7npW3Q4ckX9',
    }),
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDateFnsModule,
  ],
  declarations: [SignUpComponent],
  exports: [SignUpComponent],
})
export class SecurityModule {}
