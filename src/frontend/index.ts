import { Acolhido, ETipoDocumento, Sexo } from "models/acolhido.model";
import { ETipoHistorico } from "models/historico.model";
import { InfoEntrada } from "models/infos/info-entrada.model";
import { ECampoMedico, InfoMedica } from "models/infos/info-medica.model";

const acolhido = new Acolhido(
    "Adelcio",
    {
        rua: "Rua 1",
        numero: "1",
        bairro: "Bairro 1",
        cidade: "Cidade 1",
        estado: "Estado 1",
        cep: "CEP 1",
        complemento: "Complemento 1",
    },
    {
        tipoDocumento: ETipoDocumento.RG,
        numero: "123456789",
    },
    [],
    Sexo.MASCULINO,
    "Mãe 1",
    new Date(1998, 1, 1),
    "Naturalidade 1",
);

acolhido.historico.push(
    new InfoEntrada(
        "Motivo 1",
        {
            nome: "Responsável 1",
            celular: "Celular 1",
        }
    ),
    new InfoMedica(
        ECampoMedico.ALERGIA,
        "Valor 1",
    )
)

for (let hist of acolhido.historico) {
    console.log(hist);
}

