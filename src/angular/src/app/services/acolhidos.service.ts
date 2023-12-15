import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, timeInterval } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAcolhido, IAcolhidoItem } from '../models/Acolhido';
import { EHistoricoType, IHistorico } from '../models/Historico';

interface IAcolhidosFilter {
  query: string;
  status: string;
  filtro: string;
}

interface IHistoricoFilter {
  tipo?: EHistoricoType;
  dataInicio?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class AcolhidosService {

  baseURL = environment.BASE_URL;

  constructor(
    private http: HttpClient
  ) { }

  getHistorico(id: string, filtro: IHistoricoFilter): Observable<IHistorico[]> {

    const url = new URL(this.baseURL + '/acolhidos/' + id + '/historicos');

    const params = new URLSearchParams();
    params.append('tipo', filtro.tipo?.toString() || EHistoricoType.Todos);
    if (filtro.dataInicio) params.append('data-inicio', filtro.dataInicio.toISOString() );

    url.search = params.toString();

    // return of([
    //   {
    //     id: '1',
    //     tipo: 'entrada',
    //     data: new Date('2021-01-01'),
    //     descricao: 'Entrada',
    //   },
    //   {
    //     id: '2',
    //     tipo: 'saida',
    //     data: new Date('2021-02-01'),
    //     descricao: 'Saída',
    //   }
    // ]);

    return this.http.get<IHistorico[]>(url.toString(), {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    });    
  }

  deleteHistorico(id: number): Observable<number> {
    return this.http.delete<number>(this.baseURL + '/historicos/' + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).pipe(map(res => id));
  }

  getAcolhido(id: string): Observable<IAcolhido> {
    // return this.http.get<IAcolhido>(this.baseURL + '/acolhidos/' + id, {
    //   headers: {
    //     Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //   }
    // });
    let res: IAcolhido = {
      id: 1,
      nome: 'João Nascimento',
      mae: 'Severina Nascimento',
      pai: 'Tobias Nascimento',
      naturalidade: 'Vila Velha - ES',
      cpf: '123.456.789-00',
      rg: '123456789',
      sexo: 'M',
      status: 'acolhido',
      motivoSaida: '',
      observacoes: '',
      dataNascimento: new Date('1990-01-01'),
      dataEntrada: new Date('2021-01-01'),
      dataSaida: null,
      endereco: {
        id: 1,
        cep: '12345-678',
        logradouro: 'Rua dos Bobos',
        numero: '0',
        bairro: 'Centro',
        cidade: 'São Paulo',
        uf: 'SP',
        complemento: ''
      },
      contato: {
        id: 1,
        telefone: '(11) 99999-9999',
        celular: '(11) 99999-9999',
        email: '',
      },
      documentos: [
        {
          id: 1,
          tipo: 'RG',
          numero: '123456789',
          orgaoEmissor: 'SSP',
          dataEmissao: new Date('2010-01-01'),
        },
        {
          id: 2,
          tipo: 'CPF',
          numero: '123.456.789-00',
          orgaoEmissor: '',
          dataEmissao: new Date('2010-01-01'),
        },
      ],
      responsavel: {
        id: 1,
        nome: 'Maria',
        cpf: '123.456.789-00',
        rg: '123456789',
        dataNascimento: new Date('1990-01-01'),
        observacoes: '',
      }
    };

    return of(res);
  }

  getAcolhidos(filter: IAcolhidosFilter): Observable<IAcolhidoItem[]> {
    const params = new URLSearchParams();

    params.append('query', filter.query);
    params.append('status', filter.status);
    params.append('filtro', filter.filtro);

    const url = new URL(this.baseURL + '/acolhidos');
    url.search = params.toString();

    // return this.http.get<IAcolhidoItem[]>(url.toString(), {
    //   headers: {
    //     Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //   }
    // });

    return of([
      {
        id: 1,
        nome: 'João Nascimento',
      },
      {
        id: 2,
        nome: 'Ciclano',
      },
      {
        id: 3,
        nome: 'Beltrano',
      },
    ]);
  }
}
