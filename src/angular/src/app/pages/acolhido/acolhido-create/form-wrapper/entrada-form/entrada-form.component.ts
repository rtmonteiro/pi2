import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IAcolhido } from 'src/app/models/Acolhido';
import { IEntradaInfo } from 'src/app/models/Historico';
import { AcolhidoFormService, FormType } from 'src/app/services/acolhido-form.service';

@Component({
  selector: 'app-entrada-form',
  templateUrl: './entrada-form.component.html',
  styleUrls: ['./entrada-form.component.scss']
})
export class EntradaFormComponent implements OnInit {

  form!: FormGroup;
  @Input() infoEntrada!: IEntradaInfo;

  constructor(
    private formBuilder: FormBuilder,
    private acolhidoFormService: AcolhidoFormService,
  ) { }

  ngOnInit(): void {
    this.createBaseForm();
  }

  createBaseForm(): void {
    if (!!this.infoEntrada) {
      this.form = this.formBuilder.group({
        celular: [this.infoEntrada.celular],
        escolaridade: [this.infoEntrada.escolaridade],
        profissao: [this.infoEntrada.profissao],
        beneficio: [this.infoEntrada.beneficio],
        motivoProcura: [this.infoEntrada.motivoProcura],
        nomeResponsavel: [this.infoEntrada.nomeResponsavel],
        celularResponsavel: [this.infoEntrada.celularResponsavel],
      });
      return
    }
    this.form = this.formBuilder.group({
      celular: [''],
      escolaridade: [''],
      profissao: [''],
      beneficio: [''],
      motivoProcura: [''],
      nomeResponsavel: [''],
      celularResponsavel: [''],
    });
  }

  onPartialSubmit(){
    this.acolhidoFormService.updateFormGroup(this.form, FormType.ENTRADA);
  }

  removePartialForm(){
    this.acolhidoFormService.removeFormGroup(FormType.ENTRADA);
    this.acolhidoFormService.addOption(FormType.ENTRADA);
    this.acolhidoFormService.reset$.emit();
  }

}
