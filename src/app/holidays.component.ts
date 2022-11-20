import {Component} from '@angular/core';
import {holidays} from './holidays.data';
import {NgForOf} from "@angular/common";

@Component({
  template: `<h2>Holidays</h2>

  <div class="relative my-4" *ngFor="let holiday of holidays">
    <img [src]="'/assets/' + holiday.imageUrl" />
    <h1 class="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 centered drop-shadow-2xl">{{holiday.title}}</h1>
  </div>`,
  imports: [
    NgForOf
  ],
  styles: [ 'h1 {font-size: min(15vw, 180px); text-shadow: #000 1px 0 15px;}'],
  standalone: true,
})
export class HolidaysComponent {
  holidays = holidays;
}
