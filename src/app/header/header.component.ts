import { Component, NgModule } from '@angular/core';
import { SecurityService } from '../security/security.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

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

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, RouterModule, MatButtonModule],
})
export class HeaderComponentModule {}
