import { Component } from '@angular/core';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor() {
    const click$ = fromEvent(document, 'click');

    click$.subscribe(
      value => console.log(value),
      err => console.log(err),
      () => console.log('Done!'),
    );
  }
}
