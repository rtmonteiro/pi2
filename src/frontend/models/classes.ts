class Edicao {
    volume: number;
    numero: number;
    mes: number;
    ano: number;
    tema: Tema;
    submetidos: Artigo[];
    selecionados: Artigo[];
}

class Artigo {
    id: number;
    autores: Autor[];
    titulo: string;
    arquivo: Blob;
    tema: Tema;
    situacao: ArtigoSituacao;
}

enum ArtigoSituacao {
    SUBMETIDO,
    EM_AVALIACAO,
    SELECIONADO,
    REJEITADO
}

class Institucao {
    nome: string;
    endereco: string;
}


class Tema {
    nome: string;
}

class Autor {
    nome: string;
    email: string;
    instituicao: Institucao;
}

class Colaborador {
    nome: string;
    email: string;
    instituicao: Institucao;
}


class Avaliador extends Colaborador {
    temas: Tema[];
}

class EditorChefe extends Colaborador {

}

class Avaliacao {
    avaliador: Avaliador;
    artigo: Artigo;
    originalidade: number;
    conteudo: number;
    apresentacao: number;
}

interface Assinante {
    email: string;
    endereco: Endereco;
}

class AssinantePessoaFisica implements Assinante {
    email: string;
    endereco: Endereco;
    nome: string;
    sexo: AssinanteSexo;
    dataNascimento: Date;
    identidade: string;
    cpf: string;
}

class AssinantePessoaJuridica implements Assinante {
    email: string;
    endereco: Endereco;
    razaoSocial: string;
    cnpj: string;
    responsavel: Assinante;
}

enum AssinanteSexo {
    MASCULINO,
    FEMININO,
    NAO_INFORMADO,
    OUTRO
}

class Endereco {
    rua: string;
    numero: number;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
}

class Assinatura {
    assinante: Assinante;
    edicao: Edicao;
    data: Date;
    valor: number;
    formaPagamento: FormaPagamento;
    situacao: AssinaturaSituacao;
}

enum AssinaturaSituacao {
    PENDENTE,
    PAGA,
    CANCELADA
}

class FormaPagamento {
    valor: number;
    administradoraCartao: string;
    codigoAutorizacao: string;
}
