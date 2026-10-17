import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoanList } from './loans/loan-list/loan-list';

@Component({
  imports: [RouterOutlet,LoanList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular22-demo');
  count = signal(0);

  increment() {
    this.count.update(value => value + 1);
  }

  decrement() {
    this.count.update(value => Math.max(0, value - 1));
  }
 reset(){
  this.count.set(0)
 }
}
