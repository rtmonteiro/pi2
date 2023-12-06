import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-medico-form',
  templateUrl: './medico-form.component.html',
  styleUrls: ['./medico-form.component.scss']
})
export class MedicoFormComponent implements OnInit {

  form: FormArray;

  constructor(
    private formBulider: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBulider.array([]);    
  }

}
