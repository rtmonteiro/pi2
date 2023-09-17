import { ETipoHistorico, Historico } from "../historico.model";


export class InfoDrogas extends Historico {
    constructor(
        nome: string,
        tempo: Date,
    ) {
        super(ETipoHistorico.DROGAS);
    }
}
