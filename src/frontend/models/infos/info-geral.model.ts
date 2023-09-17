import { Historico, ETipoHistorico } from "models/historico.model";

enum ETipoGeral {
    TATUAGEM,
    CONVIVIO_FAMILIAR,
    CONVIVIO_SOCIAL,
    MOTIVO_PROCURA,
    DROGA_CAUSOU,
    INTERNADO,
    TRAUMAS,
    SUSTENTO_VICIO,
    CONDENADO,
    RELIGIAO,
    MEIO_COMUNICACAO,
    IGREJA_FREQUENTADA,
    OUTRO,
}

export class InfoGeral extends Historico {
    constructor(
        public tipoGeral: ETipoGeral,
        public CampoId?: number,
        public valorBoolean?: boolean,
        public valorString?: string,
    ) {
        super(ETipoHistorico.GERAL);
    }
}

// Table InfoGeral

// | Id | TipoGeral | CampoId | ValorBoolean | ValorString | */
// |----|-----------|---------|--------------|-------------| */
// |  1 | INTERNADO |        1|              |             | */


// Table Internacao (InfoGeral)

// | Id | AcolhidoId | Localizacao | Motivo | TempoInternado | */
// |----|------------|-------------|--------|----------------| */
// |  1 |          1 | São Paulo   |        | 1 ano          | */

// Table Condenacao (InfoGeral)

// | Id | AcolhidoId | Condenado | Motivo | CondenacaoPaga | */
// |----|------------|-----------|--------|----------------| */
// |  1 |          1 | Sim       | Roubou | Sim            | */
// |  2 |          2 | Não       |        |                | */


// Table Religiao (InfoGeral)

// | Id | AcolhidoId | Religiao | Familiares | */
// |----|------------|----------|------------| */
// |  1 |          1 | Católica | Católica   | */

// Table Historico

// | Id | AcolhidoId | TipoHistorico | InfoId | DataCriacao */
// |----|------------|---------------|--------|-------------*/
// |  1 |          1 | GERAL         |      1 | 2018-01-01  */
// |  2 |          1 | GERAL         |      2 | 2018-01-01  */
