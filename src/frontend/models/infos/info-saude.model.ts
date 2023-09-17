import { ETipoHistorico, Historico } from "models/historico.model";

export class InfoSaude extends Historico {
    constructor(
        public receita: string,
        public medicamento: string,
        public horarios: string,
    ) {
        super(ETipoHistorico.SAUDE);
    }
}
