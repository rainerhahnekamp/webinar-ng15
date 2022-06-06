import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { SecurityService } from './security.service';

@Injectable({ providedIn: 'root' })
export class UserLoaderGuard implements CanActivate {
  constructor(private securityService: SecurityService) {}

  canActivate(): Observable<boolean> | boolean {
    return this.securityService.getLoaded$().pipe(filter((loaded) => loaded));
  }
}
