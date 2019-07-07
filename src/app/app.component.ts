import { Component } from '@angular/core';
import { Observable, from } from 'rxjs';
import { PartialObserver } from 'rxjs/src/internal/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor() {
    const arr$: Observable<number> = from([2, 4, 6]);

    const observer: PartialObserver<number> = {
      next: value => console.log(value),
      error: err => console.log(err),
      complete: () => console.log('Done!'),
    };

    arr$.subscribe(observer);
  }
}
