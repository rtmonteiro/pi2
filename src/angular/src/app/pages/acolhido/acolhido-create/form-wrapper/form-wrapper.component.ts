import { Component, OnInit } from '@angular/core';
import { Observable, map, startWith, tap } from 'rxjs';
import { ISelectOption } from './form-selector/form-selector.component';
import { FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AcolhidoFormService, FormType } from 'src/app/services/acolhido-form.service';

@Component({
  selector: 'app-form-wrapper',
  templateUrl: './form-wrapper.component.html',
  styleUrls: ['./form-wrapper.component.scss']
})
export class FormWrapperComponent implements OnInit {

  options$!: Observable<ISelectOption[]>;
  formArray$!: Observable<FormArray>;
  formOnDisplay!: string;

  constructor(
    private acolhidoFormService: AcolhidoFormService,
    private formbuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.options$ = this.acolhidoFormService.optionsList$
      .pipe(
        map(options => {
          var optionsNew = options.map(opt => {return {name: opt, value: opt}})
          optionsNew.unshift({name: '', value: ''})
          return optionsNew
        }),
      );
    this.formArray$ = this.acolhidoFormService.overallForm$
    this.acolhidoFormService.reset$.pipe(
      tap(_ => this.formOnDisplay = '')
    ).subscribe()
    this.acolhidoFormService.removeOption(FormType.BASE);
      this.acolhidoFormService
        .addFormGroup(
          this.formbuilder.group({}),
          FormType.BASE
        );
  }

  formSelectorHandler(option: string | number): void {
    if(this.acolhidoFormService.options.includes(option as string)){
      this.acolhidoFormService.removeOption(option as string);
      this.acolhidoFormService
        .addFormGroup(
          this.formbuilder.group({}),
          this.stringToEnum(option as string) as FormType
          );
    }
  }

  getFormName(subform: any) {
    return Object.keys(subform)[0];
  }

  showForm(option: string){
    this.formOnDisplay = option;
  }

  cancel() {
    this.acolhidoFormService.clearForm();
    this.router.navigate(['/'])
  }

  save() {
    this.acolhidoFormService.saveForm();
  }

  stringToEnum(value: string): FormType | undefined {
    switch (value) {
      case FormType.BASE:
      case FormType.SAIDA:
      case FormType.ENTRADA:
        return value as FormType;
      default:
        return undefined; // Or throw an error, depending on your use case
    }
  }

}
