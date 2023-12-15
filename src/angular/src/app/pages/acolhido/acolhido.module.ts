import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AcolhidosListComponent } from './acolhidos-list/acolhidos-list.component';
import { AcolhidoCreateComponent } from './acolhido-create/acolhido-create.component';
import { FormFooterComponent } from './acolhido-create/form-footer/form-footer.component';
import { BaseFormComponent } from './acolhido-create/form-wrapper/base-form/base-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormDebugModule } from 'src/app/form-debug/form-debug.module';
import { FormWrapperComponent } from './acolhido-create/form-wrapper/form-wrapper.component';
import { MedicoFormComponent } from './acolhido-create/form-wrapper/medico-form/medico-form.component';
import { FormSelectorComponent } from './acolhido-create/form-wrapper/form-selector/form-selector.component';
import { AcolhidoComponent } from './acolhido.component';

@NgModule({
  declarations: [
    AcolhidosListComponent,
    AcolhidoCreateComponent,
    AcolhidoComponent,
    FormFooterComponent,
    BaseFormComponent,
    FormWrapperComponent,
    MedicoFormComponent,
    FormSelectorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    FormDebugModule
  ],
  exports: [
    FormFooterComponent,
    BaseFormComponent,
  ]
})
export class AcolhidoModule { }
