import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor() {
    const numbers: number[] = [2, 4, 6];

    let evenNumbers$ = Observable.create(subscriber => {
      for(let number of numbers) {
        if(number % 2 === 0) {
          subscriber.next(number);
        } else {
          subscriber.error(err => console.log(err));
        }
      }

      subscriber.complete();
    });

    evenNumbers$.subscribe(
      value => console.log(value),
      err => console.log(err),
      () => console.log('Done!'),
    );
  }
}
