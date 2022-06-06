import { Component } from '@angular/core';
import { SecurityService } from '../security/security.service';

@Component({
  selector: 'eternal-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent {
  loaded$ = this.securityService.getLoaded$();
  signedIn$ = this.securityService.getSignedIn$();

  constructor(private securityService: SecurityService) {}
}
