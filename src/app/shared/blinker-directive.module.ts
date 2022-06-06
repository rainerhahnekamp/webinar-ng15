import { NgModule } from '@angular/core';
import { BlinkerDirective } from './blinker.directive';

@NgModule({
  declarations: [BlinkerDirective],
  exports: [BlinkerDirective],
})
export class BlinkerDirectiveModule {}
