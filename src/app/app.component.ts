import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor() {
  }

  getName(): void {
    if(1<2){ //always true
      console.log("Welcome !")
    }
  }
}
