import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, concat, first, of, switchMap, tap } from 'rxjs';
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

  newAssistedId!: number;
  saveForm() {
    let baseIndex = this.overallForm.controls.findIndex(
      control => Object.keys(control.value)[0] === FormType.BASE
    )
    let baseInfo = this.overallForm.at(baseIndex).value?.base;

    let entryIndex = this.overallForm.controls.findIndex(
      control => Object.keys(control.value)[0] === FormType.ENTRADA
    )
    let entryInfo = entryIndex !== -1 ? <IEntradaInfo>this.overallForm.at(entryIndex).value?.entrada : null;

    let exitIndex = this.overallForm.controls.findIndex(
      control => Object.keys(control.value)[0] === FormType.SAIDA
    )
    let exitInfo = exitIndex !== -1 ? <ISaidaInfo>this.overallForm.at(entryIndex).value?.saida : null;

    let createAssisted = this.http.post<IAcolhidoApi>(`${this.baseURL}/Assisted`, mapAcolhidoToAcolhidoApi(baseInfo),{
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).pipe(
      first(),
      tap(assisted => this.newAssistedId = assisted.id)
    );

    let addEntry = this.http.post<IHistoricoApi>(`${this.baseURL}/Assisted/AddInfo/${this.newAssistedId}`,
    mapHistoricoToHistoricoApi(<IEntradaInfo>{
      tipo: EHistoricoType.Entrada,
      ...entryInfo
    }),
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    });

    let addExit = this.http.post<IHistoricoApi>(`${this.baseURL}/Assisted/AddInfo/${this.newAssistedId}`,
    mapHistoricoToHistoricoApi(<ISaidaInfo>{
      tipo: EHistoricoType.Saida,
      ...exitInfo
    }),
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    });

    concat(createAssisted, addEntry, addExit).subscribe();
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



