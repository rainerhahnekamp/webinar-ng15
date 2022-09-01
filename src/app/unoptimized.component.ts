import { Component } from '@angular/core';
import { holidays } from './holidays.data';
import { NgForOf } from '@angular/common';

@Component({
  template: `<div *ngFor="let holiday of holidays">
    <h2>{{ holiday.title }}</h2>
    <img [src]="'/assets/' + holiday.imageUrl" [alt]="holiday.title" />
  </div>`,
  imports: [NgForOf],
  standalone: true,
})
export class UnoptimizedComponent {
  holidays = holidays;
}
