import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, concat, concatMap, first, iif, of, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAcolhido, mapAcolhidoToAcolhidoApi } from '../models/Acolhido';
import { IAcolhidoApi, IHistoricoApi } from '../models/API';
import { EHistoricoType, IEntradaInfo, IHistorico, ISaidaInfo, mapHistoricoToHistoricoApi } from '../models/Historico';

@Injectable({
  providedIn: 'root'
})
export class AcolhidoFormService {

  baseURL = environment.BASE_URL;

  overallForm!: FormArray;
  options = [
    'base',
    'saida',
    'entrada',
    // 'medico',
    // 'documento',
    // 'drogas',
    // 'geral',
    // 'saude' ,
  ];
  optionsList = [...this.options];
  optionsList$ = new BehaviorSubject(this.optionsList);
  overallForm$ = new BehaviorSubject(this.overallForm);
  reset$: EventEmitter<null> = new EventEmitter()

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
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

  saveForm(): void {
    let baseIndex = this.overallForm.controls.findIndex(
      control => Object.keys(control.value).includes(FormType.BASE)
    )

    let baseInfo = this.overallForm.at(baseIndex).value?.base;

    let entryIndex = this.overallForm.controls.findIndex(
      control => Object.keys(control.value).includes(FormType.ENTRADA)
    )
    let entryInfo = entryIndex !== -1 ? <IEntradaInfo>this.overallForm.at(entryIndex).value?.entrada : null;

    let exitIndex = this.overallForm.controls.findIndex(
      control => Object.keys(control.value).includes(FormType.SAIDA)
    )
    let exitInfo = exitIndex !== -1 ? <ISaidaInfo>this.overallForm.at(exitIndex).value?.saida : null;

    let addEntry = (assistedId: number) => this.http.post<IHistoricoApi>(`${this.baseURL}/Assisted/AddInfo/${assistedId}`,
    mapHistoricoToHistoricoApi(<IEntradaInfo>{
      tipo: EHistoricoType.Entrada,
      ...entryInfo
    }));

    let addExit = (assistedId: number) => this.http.post<IHistoricoApi>(`${this.baseURL}/Assisted/AddInfo/${assistedId}`,
    mapHistoricoToHistoricoApi(<ISaidaInfo>{
      tipo: EHistoricoType.Saida,
      ...exitInfo
    }));

    this.http.post<IAcolhidoApi>(`${this.baseURL}/Assisted`, mapAcolhidoToAcolhidoApi(baseInfo))
      .subscribe({
        next: ({id}) => {
          if (exitInfo) {
            addExit(id).subscribe();
          }
          if (entryInfo) {
            addEntry(id).subscribe();
          }
        }
      });
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



