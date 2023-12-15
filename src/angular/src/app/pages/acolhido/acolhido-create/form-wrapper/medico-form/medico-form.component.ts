import { ISelectOption } from './../form-selector/form-selector.component';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-medico-form',
  templateUrl: './medico-form.component.html',
  styleUrls: ['./medico-form.component.scss']
})
export class MedicoFormComponent implements OnInit {

  // data: InfoMedico;
  form: FormGroup;
  options: ISelectOption[];
  formOptions: OptionToFormMapper = {
    'hiv': this.addHivForm.bind(this),
    'cirurgia': this.addCirurgiaForm.bind(this),
    'diabetes': this.addDiabetesForm.bind(this),
    'hipertensao': this.addHipertensaoForm.bind(this),
    'alergia': this.addAlergiaForm.bind(this),
    'disturbiomental': this.addDisturbioMentalForm.bind(this),
    'outro': this.addOutroForm.bind(this),
  };
  singleOptions = [
    'hiv',
    'diabetes',
    'hipertensao',
  ]

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      formArray: this.formBuilder.array([])
    });
    this.options = [];
  }

  ngOnInit(): void {
    this.options = Object.keys(this.formOptions).map(option =>
      <ISelectOption>{name: option, value: option}
    );
    this.options.unshift(<ISelectOption>{name: '', value: ''});
  }

  get formArray() {
    return this.form.get('formArray') as FormArray;
  }

  getFormName(index: number){
    return Object.keys(this.formArray.get(`${index}`)?.value)[0];
  }

  formSelectorHandler(option: string | number): void {
    if (Object.keys(this.formOptions).includes(option as string)){
      let formToAdd = null;
      if(this.singleOptions.includes(option as string)){
        this.options = this.options.filter(o => o.name !== option);
      }
      formToAdd = this.formOptions[option]();

      if(!!formToAdd){
        this.formArray.push(formToAdd);
      }
    }
  }

  removeForm(index: number) {
    let name = this.getFormName(index);
    if(this.singleOptions.includes(name) && !this.options.some(o => o.value === name)){
      this.options.unshift(<ISelectOption>{name: name, value: name});
    }
    this.formArray.removeAt(index);
  }

  addHivForm(): FormGroup {
      return this.formBuilder.group({
        hiv: [false]
      });
  }

  addCirurgiaForm(): FormGroup {
    return this.formBuilder.group({
      cirurgia: ['']
    });
  }

  addDiabetesForm(): FormGroup {
    return this.formBuilder.group({
      diabetes: [false]
    })
  }

  addHipertensaoForm(): FormGroup {
    return this.formBuilder.group({
      hipertensao: [false]
    })
  }

  addAlergiaForm(): FormGroup {
    return this.formBuilder.group({
      alergia: [false]
    })
  }

  addDisturbioMentalForm(): FormGroup {
    return this.formBuilder.group({
      disturbioMental: [false]
    })
  }

  addOutroForm(): FormGroup {
    return this.formBuilder.group({
      outro: ['']
    })
  }

}

export type OptionToFormMapper = {[key: string]: () => FormGroup | FormControl | null }

export enum InfoMedicoOptions {
  HIV = 'hiv',
  CIRURGIA = 'cirurgia',
  OUTRO = 'outro'
}
export interface InfoMedico {
  tipoInfo: InfoMedicoOptions[]
}
