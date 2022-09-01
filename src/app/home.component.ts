import { Component } from '@angular/core';

@Component({
  selector: 'eternal-home',
  styles: [
    `
      span {
        font-family: Consolas, monospace;
      }
    `,
  ],
  template: `<h2 data-testid="greeting">Welcome to Eternal</h2>
    <p>
      This is a demonstration for the <span>NgOptimizedImage</span> directive,
      introduced in Angular 14.2.
    </p> `,
  standalone: true,
})
export class HomeComponent {}
