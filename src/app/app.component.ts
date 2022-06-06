import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidemenuComponentModule } from './sidemenu/sidemenu.component';
import { HeaderComponentModule } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-14';
}

@NgModule({
  declarations: [AppComponent],
  exports: [AppComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    SidemenuComponentModule,
    RouterModule,
    HeaderComponentModule,
    MatToolbarModule,
  ],
})
export class AppComponentModule {}
