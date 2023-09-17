import { Historico, ETipoHistorico } from "models/historico.model";

export class InfoSaida extends Historico {
    constructor(
        public motivo: string,
        public isDesistencia: boolean = false
    ) {
        super(ETipoHistorico.SAIDA);
    }
}
