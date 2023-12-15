import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IAcolhidoItem } from 'src/app/models/Acolhido';
import { AcolhidosService } from 'src/app/services/acolhidos.service';

@Component({
  selector: 'app-acolhidos-list',
  templateUrl: './acolhidos-list.component.html',
  styleUrls: ['./acolhidos-list.component.scss']
})
export class AcolhidosListComponent implements OnInit {

  acolhidoStatus = [
    {value: 'ativo', name: 'Ativo'},
    {value: 'inativo', name: 'Inativo'},
  ];
  acolhidoFiltro = [
    {value: 'ativo', name: 'Ativo'},
    {value: 'inativo', name: 'Inativo'},
  ];
  acolhidos$!: Observable<IAcolhidoItem[]>;

  constructor(
    private acolhidosService: AcolhidosService,
  ) { }

  ngOnInit(): void {
    this.acolhidos$ = this.acolhidosService.getAcolhidos({
      filtro: 'ativo',
      status: 'ativo',
    });
  }

}
