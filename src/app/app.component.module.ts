import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidemenuComponentModule } from './sidemenu/sidemenu.component.module';
import { RouterModule } from '@angular/router';
import { HeaderComponentModule } from './header/header.component.module';
import { MatToolbarModule } from '@angular/material/toolbar';

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
