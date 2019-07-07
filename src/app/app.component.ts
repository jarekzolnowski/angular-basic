import { Component } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { AsyncSubject } from 'rxjs/internal/AsyncSubject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  subject$: Subject<number> = new Subject<number>();
  behaviorSubject$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  replaySubject$: ReplaySubject<number> = new ReplaySubject<number>();
  asyncSubject$: AsyncSubject<number> = new AsyncSubject<number>();
  numbers: number[] = [1, 2, 3, 6, 7, 9];

  constructor() {
    this.playSubject();
    this.playBehaviorSubject();
    this.playReplaySubject();
    this.playAsyncSubject();
  }

  playSubject(): void {
    this.subject$.subscribe(value => {
      console.log('value ', value);
    });

    this.next(this.subject$);
  }

  playBehaviorSubject(): void {
    this.next(this.behaviorSubject$);
    this.behaviorSubject$.subscribe(value => {
      console.log('value ', value);
    });
    this.next(this.behaviorSubject$);
  }

  playReplaySubject(): void {
    this.next(this.replaySubject$);
    this.replaySubject$.subscribe(value => {
      console.log('value ', value);
    });
  }

  playAsyncSubject(): void {
    this.asyncSubject$.subscribe(value => {
      console.log('value ', value);
    });
    this.next(this.asyncSubject$);
    this.asyncSubject$.complete();
  }

  next(subjectType$: Subject<number>): void {
    for (const n of this.numbers) {
      subjectType$.next(n);
    }
  }
}
