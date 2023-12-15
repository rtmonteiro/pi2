export interface IHistorico {
    id: number;
    data: Date;
    tipo: `${EHistoricoType}`;
    descricao: string;
}

export interface IEntradaInfo extends IHistorico {
    tipo: EHistoricoType.Entrada;
}

export interface ISaidaInfo extends IHistorico {
    tipo: EHistoricoType.Saida;
}

export interface ISaudeInfo extends IHistorico {
    tipo: EHistoricoType.Saude;
}

export interface IMedicacaoInfo extends IHistorico {
    tipo: EHistoricoType.Medicacao;
}

export enum EHistoricoType {
    Todos = 'todos',
    Entrada = 'entrada',
    Saida = 'saida',
    Saude = 'saude',
    Medicacao = 'medicacao',
}
