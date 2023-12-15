import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IAcolhido } from 'src/app/models/Acolhido';
import { EHistoricoType, IHistorico } from 'src/app/models/Historico';
import { AcolhidosService } from 'src/app/services/acolhidos.service';

@Component({
  selector: 'app-acolhido',
  templateUrl: './acolhido.component.html',
  styleUrls: ['./acolhido.component.scss']
})
export class AcolhidoComponent implements OnInit {
  
  id: string = this.route.snapshot.paramMap.get('id') || '';

  acolhido$?: Observable<IAcolhido>;
  historicoFiltro: Array<{ value: EHistoricoType, name: string }> = [
    { value: EHistoricoType.Todos, name: 'Todos' },
    { value: EHistoricoType.Entrada, name: 'Entrada' },
    { value: EHistoricoType.Saida, name: 'Saída' },
    { value: EHistoricoType.Saude, name: 'Saúde' },
    { value: EHistoricoType.Medicacao, name: 'Medicação' },
  ];
  historicoType = EHistoricoType;

  historicos$?: Observable<IHistorico[]>;

  constructor(
    private route: ActivatedRoute,
    private acolhidosService: AcolhidosService,
  ) { }


  ngOnInit(): void {
    this.acolhido$ = this.acolhidosService.getAcolhido(this.id);
    this.historicos$ = this.acolhidosService.getHistorico(this.id, {
      tipo: EHistoricoType.Todos,
      dataInicio: new Date('2021-01-01'),
    });
  }

  updateHistoricosList(tipo?: string, dataInicio?: Date) {
    const tipoFilter = tipo as EHistoricoType || EHistoricoType.Todos;

    this.historicos$ = this.acolhidosService.getHistorico(this.id, {
      tipo: tipoFilter,
      dataInicio,
    });
  }

  deleteHistorico(id: number) {
    this.acolhidosService.deleteHistorico(id)
      .subscribe(() => {
        this.updateHistoricosList();
      });
  }

}
