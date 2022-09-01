import { Component } from '@angular/core';
import { holidays } from './holidays.data';
import { NgForOf, NgOptimizedImage } from '@angular/common';

@Component({
  template: `<div *ngFor="let holiday of holidays; first as isFirst">
    <h2>{{ holiday.title }}</h2>
    <img
      [rawSrc]="'/assets/' + holiday.imageUrl"
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
