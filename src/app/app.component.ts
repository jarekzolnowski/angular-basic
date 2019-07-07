import { Component } from '@angular/core';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor() {
    const click$ = fromEvent(document, 'click').pipe(
      distinctUntilChanged((prev: MouseEvent, current: MouseEvent) => prev.clientX === current.clientX && prev.clientY === current.clientY),
      map(({clientX, clientY}) => `Mouse clicks: X ${clientX} Y ${clientY}`)
    );

    click$.subscribe(
      value => console.log(value),
      err => console.log(err),
      () => console.log('Done!'),
    );
  }
}
