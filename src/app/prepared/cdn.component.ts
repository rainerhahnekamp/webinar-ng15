import { Component } from '@angular/core';
import { holidays } from '../holidays.data';
import {
  NgForOf,
  NgOptimizedImage,
  provideCloudinaryLoader,
} from '@angular/common';

@Component({
  template: `<h2>Optimized Version with Cloudinary CDN</h2>
    <div *ngFor="let holiday of holidays; first as isFirst">
      <h3>{{ holiday.title }}</h3>
      <img
        [ngSrc]="'/angular-14-2/' + holiday.imageUrl"
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
