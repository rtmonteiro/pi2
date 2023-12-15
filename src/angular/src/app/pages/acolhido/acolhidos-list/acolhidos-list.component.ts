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

  acolhidoFiltro = [
    {value: 'nome', name: 'Nome'},
    {value: 'documento', name: 'Documento'},
  ];
  acolhidoStatus = [
    {value: 'todos', name: 'Todos'},
    {value: 'ativo', name: 'Ativo'},
    {value: 'inativo', name: 'Inativo'},
  ];

  form = {
    filtro: this.acolhidoFiltro[0].value,
    status: this.acolhidoStatus[0].value,
  };

  acolhidos$!: Observable<IAcolhidoItem[]>;

  constructor(
    private acolhidosService: AcolhidosService,
  ) { }

  ngOnInit(): void {
    this.acolhidos$ = this.acolhidosService.getAcolhidos({
      filtro: this.form.filtro,
      status: this.form.status,
    });
  }

}
