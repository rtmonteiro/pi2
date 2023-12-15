import { IAcolhidoApi, IDocumentoApi, IEnderecoApi } from "./API";

export interface IAcolhidoItem {
    id: number;
    name: string;
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


export function mapAcolhidoToAcolhidoApi(acolhido: any): IAcolhidoApi {
  const acolhidoApi: IAcolhidoApi = {
      id: acolhido.id,
      name: acolhido.nome,
      mother: acolhido.mae,
      father: acolhido.pai,
      birthDate: acolhido.dataNascimento, // Convert Date to string
      gender: acolhido.sexo === 'M' ? 0 : 1, // Assuming 'M' is mapped to 0 and 'F' to 1
      nationality: acolhido.naturalidade,
      address: mapEnderecoToEnderecoApi(acolhido.endereco),
      documents: !!acolhido.documentos ? acolhido.documentos.map(mapDocumentoToDocumentoApi) : []
  };

  return acolhidoApi;
}

function mapEnderecoToEnderecoApi(endereco: IEndereco): IEnderecoApi {
  const enderecoApi: IEnderecoApi = {
      street: endereco.logradouro,
      city: endereco.cidade,
      state: endereco.uf,
      cep: endereco.cep,
      country: '' // Assuming a default country for the address
  };

  return enderecoApi;
}

function mapDocumentoToDocumentoApi(documento: IDocumento): IDocumentoApi {
  const documentoApi: IDocumentoApi = {
      type: 1, // Assuming a default type for the document
      value: documento.numero,
      name: documento.tipo,
      isDeleted: false // Assuming the document is not deleted by default
  };

  return documentoApi;
}
