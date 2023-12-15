import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IAcolhido } from 'src/app/models/Acolhido';
import { AcolhidoFormService, FormType } from 'src/app/services/acolhido-form.service';

@Component({
  selector: 'app-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.scss']
})
export class BaseFormComponent implements OnInit {

  form!: FormGroup;
  @Input() infoBase!: IAcolhido;

  constructor(
    private formBuilder: FormBuilder,
    private acolhidoFormService: AcolhidoFormService,
  ) { }

  ngOnInit(): void {
    this.createBaseForm();
  }

  createBaseForm(): void {
    if (!!this.infoBase) {
      this.form = this.formBuilder.group({
        nome: [this.infoBase.nome],
        mae: [this.infoBase.mae],
        pai: [this.infoBase.pai],
        dataNascimento: [this.infoBase.dataNascimento],
        sexo: [this.infoBase.sexo],
        naturalidade: [this.infoBase.naturalidade],
        endereco: this.formBuilder.group({
          cep: [this.infoBase.endereco.cep],
          logradouro: [this.infoBase.endereco.logradouro],
          numero: [this.infoBase.endereco.numero],
          bairro: [this.infoBase.endereco.bairro],
          cidade: [this.infoBase.endereco.cidade],
          uf: [this.infoBase.endereco.uf],
          complemento: [this.infoBase.endereco.complemento],
        }),
      });
      return
    }
    this.form = this.formBuilder.group({
      nome: [''],
      mae: [''],
      pai: [''],
      dataNascimento: [null],
      sexo: [''],
      naturalidade: [''],
      endereco: this.formBuilder.group({
        cep: [''],
        logradouro: [''],
        numero: [''],
        bairro: [''],
        cidade: [''],
        uf: [''],
        complemento: [''],
      }),
    });
  }

  onPartialSubmit(){
    this.acolhidoFormService.updateFormGroup(this.form, FormType.BASE);
  }

  removePartialForm(){
    this.acolhidoFormService.removeFormGroup(FormType.BASE);
    this.acolhidoFormService.addOption(FormType.BASE);
    this.acolhidoFormService.reset$.emit();
  }

}
