import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: 'button.component.html'
})

export class ButtonComponent {
  @Input() label: string;
  @Output() action: EventEmitter<string> = new EventEmitter<string>();

  onClick(): void {
    this.action.emit('Button Clicked!');
  }
}
