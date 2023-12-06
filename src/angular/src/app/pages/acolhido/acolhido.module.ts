import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcolhidosListComponent } from './acolhidos-list/acolhidos-list.component';
import { AcolhidoCreateComponent } from './acolhido-create/acolhido-create.component';
import { FormFooterComponent } from './acolhido-create/form-footer/form-footer.component';
import { BaseFormComponent } from './acolhido-create/base-form/base-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormDebugModule } from 'src/app/form-debug/form-debug.module';

@NgModule({
  declarations: [
    AcolhidosListComponent,
    AcolhidoCreateComponent,
    FormFooterComponent,
    BaseFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormDebugModule
  ],
  exports: [
    FormFooterComponent,
    BaseFormComponent,
  ]
})
export class AcolhidoModule { }
