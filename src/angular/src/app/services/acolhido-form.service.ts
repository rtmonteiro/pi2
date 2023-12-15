import { EventEmitter, Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcolhidoFormService {

  overallForm!: FormArray;
  options = [
    'base',
    'saida',
    'entrada',
    // 'medico',
    // 'documento',
    // 'drogas',
    // 'geral',
    // 'saude',
  ];
  optionsList = [...this.options];
  optionsList$ = new BehaviorSubject(this.optionsList);
  overallForm$ = new BehaviorSubject(this.overallForm);
  reset$: EventEmitter<null> = new EventEmitter()

  constructor(private formBuilder: FormBuilder) {
    this.overallForm = this.formBuilder.array([]);
  }

  addFormGroup(formGroup: FormGroup, type: FormType) {
    this.overallForm.push(
      this.formBuilder.group({
        [type]: formGroup
      })
    );
    this.overallForm$.next(this.overallForm);
  }

  updateFormGroup(formGroup: FormGroup, type: FormType){
    let newFormArrayElement = this.formBuilder.group({
      [type]: formGroup
    })
    let index = this.overallForm.controls.findIndex(control => Object.keys(control.value)[0] === type);
    this.overallForm.removeAt(index);
    this.overallForm.insert(index, newFormArrayElement);
    this.overallForm$.next(this.overallForm);
  }

  removeFormGroup(option: FormType) {
    if(option !== 'base'){
      let index = this.overallForm.controls.findIndex(
        control => Object.keys(control.value)[0] === option
      )
      this.overallForm.removeAt(index);
      this.overallForm$.next(this.overallForm);
    }
  }

  addOption(option: string){
    if (!this.optionsList.includes(option)){
      this.optionsList.push(option)
      this.optionsList$.next(this.optionsList);
    }
  }

  removeOption(option: string){
    this.optionsList = this.optionsList.filter(o => o !== option);
    this.optionsList$.next(this.optionsList);
  }

  saveForm() {

  }

  clearForm() {
    this.overallForm.clear();
  }
}

export enum FormType {
  BASE = 'base',
  SAIDA = 'saida',
  ENTRADA = 'entrada',
  // MEDICO = 'medico',
  // DOCUMENTO = 'documento',
  // DROGAS = 'drogas',
  // GERAL = 'geral',
  // SAUDE = 'saude',
}
