import { Component } from '@angular/core';
import { SecurityService } from '../security/security.service';

@Component({
  selector: 'eternal-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  user$ = this.userService.getLoadedUser$();

  constructor(private userService: SecurityService) {}

  signOut() {
    this.userService.signOut();
  }

  signIn() {
    this.userService.signIn();
  }
}
