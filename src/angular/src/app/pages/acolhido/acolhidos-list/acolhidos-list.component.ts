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
    {value: undefined, name: 'Todos'},
    {value: false, name: 'Ativo'},
    {value: true, name: 'Inativo'},
  ];

  form = {
    query: '',
    status: this.acolhidoStatus[0].value,
  };

  acolhidos$!: Observable<IAcolhidoItem[]>;

  constructor(
    private acolhidosService: AcolhidosService,
  ) { }

  ngOnInit(): void {
    this.acolhidos$ = this.acolhidosService.getAcolhidos({});
  }

  searchAcolhido() {
    this.acolhidos$ = this.acolhidosService.getAcolhidos({
      name: this.form.query,
      status: this.form.status,
    });
  }

}
