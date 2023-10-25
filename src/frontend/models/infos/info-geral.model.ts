import { Historico, ETipoHistorico } from "models/historico.model";

enum ETipoGeral {
    TATUAGEM,
    CONVIVIO_FAMILIAR,
    DROGA_CAUSOU,
    INTERNADO, // Internacao
    TRAUMAS,
    SUSTENTO_VICIO,
    CONDENADO, // Condenacao
    RELIGIAO, // Religiao
    MEIO_COMUNICACAO,
    IGREJA_FREQUENTADA,
    OUTRO,
}

export class InfoGeral extends Historico {
    constructor(
        public tipoGeral: ETipoGeral,
        public campoId?: number,
        public campo?: Internacao | Condenacao | Religiao,
        public valorBoolean?: boolean,
        public valorString?: string,
    ) {
        super(ETipoHistorico.GERAL);
    }
}

class Internacao {
    constructor(
        public localizacao: string,
        public motivo: string,
        public tempoInternado: string,
    ) { }
}

class Condenacao {
    constructor(
        public motivo: string,
        public condenacaoPaga: boolean,
    ) { }
}

class Religiao {
    constructor(
        public religiao: string,
        public familiares: string,
    ) { }
}

// Table Historico

// | Id | AcolhidoId | TipoHistorico | InfoId | DataCriacao */
// |----|------------|---------------|--------|-------------*/
// |  1 |          1 | GERAL         |      1 | 2018-01-01  */
// |  2 |          1 | GERAL         |      2 | 2018-01-01  */

// Table InfoGeral

// | Id | TipoGeral | CampoId | ValorBoolean | ValorString | */
// |----|-----------|---------|--------------|-------------| */
// |  1 | INTERNADO |        1|              |             | */
// |  2 | MOTIVO_PROCURA |    |              | Precisava   | */


// Table Internacao (InfoGeral)

// | Id | Localizacao | Motivo | TempoInternado | */
// |----|-------------|--------|----------------| */
// |  1 | São Paulo   |        | 1 ano          | */

// Table Condenacao (InfoGeral)

// | Id | Condenado | Motivo | CondenacaoPaga | */
// |----|-----------|--------|----------------| */
// |  1 | Sim       | Roubou | Sim            | */
// |  2 | Não       |        |                | */


// Table Religiao (InfoGeral)

// | Id | Religiao | Familiares | */
// |----|----------|------------| */
// |  1 | Católica | Católica   | */
