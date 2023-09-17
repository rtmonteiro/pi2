import { ETipoHistorico, Historico } from "models/historico.model";


export class InfoEntrada extends Historico {
    constructor(
        public motivo: string,
        public responsavel: Responsavel,
        public celular?: string,
        public recado?: string,
        public escolaridade?: string,
        public profissao?: string,
        public temBenefico?: boolean,
    ) {
        super(ETipoHistorico.ENTRADA);
    }
}

interface IResponsavel {
    nome: string;
    celular: string;
}

class Responsavel implements IResponsavel {
    constructor(
        public nome: string,
        public celular: string,
    ) { }
}
