import { NgModule } from '@angular/core';
import { AuthModule } from '@auth0/auth0-angular';
import { StoreModule } from '@ngrx/store';
import { securityFeature } from './+state/security.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SecurityEffects } from './+state/security.effects';

@NgModule({
  imports: [
    StoreModule.forFeature(securityFeature),
    EffectsModule.forFeature([SecurityEffects]),
    AuthModule.forRoot({
      domain: 'dev-xbu2-fid.eu.auth0.com',
      clientId: 'YgUoOMh2jc4CQuo8Ky9PS7npW3Q4ckX9',
    }),
  ],
})
export class SecurityModule {}
