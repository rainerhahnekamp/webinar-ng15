import { Component } from '@angular/core';
import { holidays } from '../holidays.data';
import { NgForOf } from '@angular/common';

@Component({
  template: `<h2>Unoptimized Version</h2>
    <div *ngFor="let holiday of holidays">
      <h3>{{ holiday.title }}</h3>
      <img [src]="'/assets/' + holiday.imageUrl" [alt]="holiday.title" />
    </div>`,
  imports: [NgForOf],
  standalone: true,
})
export class UnoptimizedComponent {
  holidays = holidays;
}
