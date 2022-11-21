import {Component} from '@angular/core';
import {holidays} from './holidays.data';
import {NgForOf, NgOptimizedImage, provideCloudinaryLoader} from "@angular/common";

@Component({
  template: `<h2>Holidays</h2>

  <div class="relative my-4" *ngFor="let holiday of holidays; first as isFirst">
    <img [ngSrc]="holiday.imageUrl" width="1920" height="1080" sizes="100vw" [priority]="isFirst" />
    <h1 class="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 centered drop-shadow-2xl">{{holiday.title}}</h1>
  </div>`,
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  styles: [ 'h1 {font-size: min(15vw, 180px); text-shadow: #000 1px 0 15px;}'],
  standalone: true,
  providers: [provideCloudinaryLoader('https://res.cloudinary.com/dhidasbqj')]
})
export class HolidaysComponent {
  holidays = holidays.map(holiday => ({...holiday, imageUrl: `/angular-15/${holiday.imageUrl}`}))
}
