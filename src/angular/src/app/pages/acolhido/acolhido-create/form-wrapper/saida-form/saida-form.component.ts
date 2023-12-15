import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ISaidaInfo } from 'src/app/models/Historico';
import { AcolhidoFormService, FormType } from 'src/app/services/acolhido-form.service';

@Component({
  selector: 'app-saida-form',
  templateUrl: './saida-form.component.html',
  styleUrls: ['./saida-form.component.scss']
})
export class SaidaFormComponent implements OnInit {

  form!: FormGroup;
  @Input() infoSaida!: ISaidaInfo;

  constructor(
    private formBuilder: FormBuilder,
    private acolhidoFormService: AcolhidoFormService,
  ) { }

  ngOnInit(): void {
    this.createBaseForm();
  }

  createBaseForm(): void {
    if (!!this.infoSaida) {
      this.form = this.formBuilder.group({
        razao: [this.infoSaida.razao],
        ehDesistencia: [this.infoSaida.ehDesistencia],
        pessoaInformada: [this.infoSaida.pessoaInformada],
      });
      return
    }
    this.form = this.formBuilder.group({
      razao: [''],
      ehDesistencia: [''],
      pessoaInformada: [''],
    });
  }

  onPartialSubmit(){
    this.acolhidoFormService.updateFormGroup(this.form, FormType.SAIDA);
  }

  removePartialForm(){
    this.acolhidoFormService.removeFormGroup(FormType.SAIDA);
    this.acolhidoFormService.addOption(FormType.SAIDA);
    this.acolhidoFormService.reset$.emit();
  }

}
