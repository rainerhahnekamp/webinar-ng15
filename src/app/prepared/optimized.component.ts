import { Component } from '@angular/core';
import { holidays } from '../holidays.data';
import { NgForOf, NgOptimizedImage } from '@angular/common';

@Component({
  template: `<h2>Optimized Version</h2>
    <div *ngFor="let holiday of holidays; first as isFirst">
      <h3>{{ holiday.title }}</h3>
      <img
        [ngSrc]="'/assets/' + holiday.imageUrl"
        [alt]="holiday.title"
        [priority]="isFirst ? 'priority' : 'false'"
        width="1920"
        height="1080"
      />
    </div>`,
  imports: [NgForOf, NgOptimizedImage],
  standalone: true,
})
export class OptimizedComponent {
  holidays = holidays;
}
