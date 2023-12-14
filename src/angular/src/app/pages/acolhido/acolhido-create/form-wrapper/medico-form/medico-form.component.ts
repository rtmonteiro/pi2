import { ISelectOption } from './../form-selector/form-selector.component';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-medico-form',
  templateUrl: './medico-form.component.html',
  styleUrls: ['./medico-form.component.scss']
})
export class MedicoFormComponent implements OnInit {

  form: FormGroup;
  hasHivForm: boolean;
  options: ISelectOption[];
  formOptions: OptionToFormMapper = {
    'hiv': this.addHivForm.bind(this),
    'cirurgia': this.addCirurgiaForm.bind(this),
    'outro': this.addOutroForm.bind(this)
  };

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      formArray: this.formBuilder.array([])
    });
    this.options = [];
    this.hasHivForm = false;
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
      let formToAdd = this.formOptions[option]();
      if(!!formToAdd){
        this.formArray.push(formToAdd);
      }
    }
  }

  removeForm(index: number) {
    let name = this.getFormName(index);
    if(name === 'hiv'){
      this.hasHivForm = false;
    }
    this.formArray.removeAt(index);
  }

  addHivForm(): FormControl | null {
    if(!this.hasHivForm){
      this.hasHivForm = true;
      return this.formBuilder.control({
        hiv: [null]
      });
    }
    return null;
  }

  addCirurgiaForm(): FormControl {
    return this.formBuilder.control({
      cirurgia: [null]
    });
  }

  addOutroForm(): FormControl {
    return this.formBuilder.control({
      outro: [null]
    })
  }

}

export type OptionToFormMapper = {[key: string]: () => FormGroup | FormControl | null }
