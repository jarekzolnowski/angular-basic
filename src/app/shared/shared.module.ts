import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const modules = [
  CommonModule,
  FormsModule
];

@NgModule({
  imports: modules
})
export class SharedModule {
}
