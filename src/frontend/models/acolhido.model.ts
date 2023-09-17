import { Historico } from "./historico.model";


export class Acolhido {
    historico: Historico[] = [];

    constructor(
        public nome: string,
        public endereco: IEndereco,
        public documento: IDocumento,
        public fotos: Foto[],
        public sexo: Sexo,
        public mae: string,
        public dataNascimento: Date,
        public naturalidade: string,
        public pai?: string,
        public isFilho: boolean = false,
        public parente: Acolhido | null = null,
    ) {
    }
}

class Foto {
    constructor(
        public fotoRostoFrente: Blob,
        public fotoRostoEsquerda: Blob,
        public fotoRostoDireita: Blob,
        public fotoCorpo: Blob,
    ) { }
}

export enum Sexo {
    MASCULINO,
    FEMININO,
    NAO_INFORMADO,
    OUTROS,
}

export enum ETipoDocumento {
    RG,
    CPF,
    OUTRO,
}

interface IDocumento {
    tipoDocumento: ETipoDocumento;
    numero: string;
    nomeOutro?: string;
}

class Documento implements IDocumento {
    constructor(
        public tipoDocumento: ETipoDocumento,
        public numero: string,
        public nomeOutro?: string,
    ) { }
}

interface IEndereco {
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
    complemento: string;
}

class Endereco implements IEndereco {
    constructor(
        public rua: string,
        public numero: string,
        public bairro: string,
        public cidade: string,
        public estado: string,
        public cep: string,
        public complemento: string,
    ) { }
}
