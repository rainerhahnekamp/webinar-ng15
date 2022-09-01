import { Component } from '@angular/core';
import { holidays } from './holidays/+state/holidays.data';
import {
  NgForOf,
  NgOptimizedImage,
  provideCloudinaryLoader,
} from '@angular/common';

@Component({
  template: `<div *ngFor="let holiday of holidays; first as isFirst">
    <h2>{{ holiday.title }}</h2>
    <img
      [rawSrc]="'/angular-14-2/' + holiday.imageUrl"
      [alt]="holiday.title"
      [priority]="isFirst ? 'priority' : 'false'"
      width="1920"
      height="1080"
    />
  </div>`,
  imports: [NgForOf, NgOptimizedImage],
  providers: [provideCloudinaryLoader('https://res.cloudinary.com/dhidasbqj')],
  standalone: true,
})
export class CdnComponent {
  holidays = holidays;
}
