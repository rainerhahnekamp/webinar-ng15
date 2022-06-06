import { Component } from '@angular/core';
import { SecurityService } from '../security/security.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'eternal-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule],
})
export class SidemenuComponent {
  loaded$ = this.securityService.getLoaded$();
  signedIn$ = this.securityService.getSignedIn$();

  constructor(private securityService: SecurityService) {}
}
