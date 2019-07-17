import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';

const modules = [
  CommonModule,
  FormsModule
];

const components = [
  ButtonComponent
];

const exports = [
  ButtonComponent
];

@NgModule({
  imports: modules,
  declarations: components,
  exports
})
export class SharedModule {
}
