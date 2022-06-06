import { Component, NgModule } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { securityFeature } from '../+state/security.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SecurityEffects } from '../+state/security.effects';
import { CommonModule } from '@angular/common';
import { AuthModule } from '@auth0/auth0-angular';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDateFnsModule } from '@angular/material-date-fns-adapter';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  formGroup = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    holidaysPerYear: [0, Validators.required],
    birthday: [null, Validators.required],
    terms: [false],
  });

  constructor(private fb: NonNullableFormBuilder) {}
}

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
export class SignUpComponentModule {}
