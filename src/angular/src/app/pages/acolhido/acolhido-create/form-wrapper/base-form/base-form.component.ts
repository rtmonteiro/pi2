import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.scss']
})
export class BaseFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      nome: [null],
      mae: [null],
      pai: [null],
      dataNascimento: [null],
      sexo: [null],
      naturalidade: [null]
    });
  }

  ngOnInit(): void {
    // this.form = new FormGroup({
    //   nome: new FormControl(null),
    //   mae: new FormControl(null),
    //   pai: new FormControl(null),
    //   dataNascimento: new FormControl(null),
    //   sexo: new FormControl(null),
    //   naturalidade: new FormControl(null)
    // });
  }

}
