import { IHistorico } from "./Historico";

export interface IAcolhidoItem {
    id: number;
    nome: string;
}

export interface IAcolhido {
    id: number;
    nome: string;
    pai: string;
    mae: string;
    naturalidade: string;
    dataNascimento: Date;
    sexo: string;
    cpf: string;
    rg: string;
    dataEntrada: Date;
    dataSaida: null | Date;
    status: string;
    motivoSaida: string;
    observacoes: string;
    endereco: IEndereco;
    contato: IContato;
    documentos: IDocumento[];
    responsavel: IResponsavel;
}

interface IEndereco {
    id: number;
    cep: string;
    logradouro: string;
    numero: string;
    bairro: string;
    cidade: string;
    uf: string;
    complemento: string;
}

interface IContato {
    id: number;
    telefone: string;
    celular: string;
    email: string;
}

interface IDocumento {
    id: number;
    tipo: string;
    numero: string;
    orgaoEmissor: string;
    dataEmissao: Date;
}

interface IResponsavel {
    id: number;
    nome: string;
    cpf: string;
    rg: string;
    dataNascimento: Date;
    observacoes: string;
}
