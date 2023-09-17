import { ETipoHistorico, Historico } from "models/historico.model";

export enum ECampoMedico {
    HIV,
    CIRURGIA,
    DIABETES,
    HIPERTENSAO,
    ALERGIA,
    DISTURBIO_MENTAL,
    OUTRO,
}

export class InfoMedica extends Historico {
    constructor(
        public tipoMedico: ECampoMedico,
        public valor: string,
    ) {
        super(ETipoHistorico.MEDICA);
    }
}

// Table InfoMedica

// | id | tipo | historico_id | valor |
// |----|------|--------------|-------|
// | 1  | 0    | 1            | 0     |
