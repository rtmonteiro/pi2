export enum ETipoHistorico {
	ENTRADA,
	SAIDA,
	MEDICA,
	GERAL,
	SAUDE,
	DROGAS,
}


export abstract class Historico {
    dataCriacao: Date;
    tipo: ETipoHistorico;

    constructor(tipo) {
        this.dataCriacao = new Date();
        this.tipo = tipo;
    }
}
