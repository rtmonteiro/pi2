import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormDebugComponent } from 'src/app/form-debug/form-debug.component';

@NgModule({
  declarations: [
    FormDebugComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormDebugComponent
  ]
})
export class FormDebugModule { }
