import { IEntradaInfoApi, IHistoricoApi, ISaidaInfoApi } from "./API";

export interface IHistorico {
    id: number;
    tipo: EHistoricoType
    data: Date;
    descricao: string;
}

export interface IEntradaInfo extends IHistorico {
    tipo: EHistoricoType.Entrada;
    celular: string;
    escolaridade: string;
    profissao: string;
    beneficio: string;
    motivoProcura: string;
    nomeResponsavel: string;
    celularResponsavel: string;
}

export interface ISaidaInfo extends IHistorico {
    tipo: EHistoricoType.Saida;
    razao: string;
    ehDesistencia: boolean;
    pessoaInformada: string;
}

export interface ISaudeInfo extends IHistorico {
    tipo: EHistoricoType.Saude;
}

export interface IMedicoInfo extends IHistorico {
    tipo: EHistoricoType.Medico;
}

export enum EHistoricoType {
    Medico,
    Base,
    Entrada,
    Drogas,
    Saida,
    Saude,
    Todos,
}


export function mapHistoricoToHistoricoApi(historico: IHistorico): IHistoricoApi {
  const historicoApi: IHistoricoApi = {
      registerDate: historico.data,
      typeInfo: mapEHistoricoTypeToNumber(historico.tipo),
  };

  if (historico.tipo === EHistoricoType.Entrada) {
      historicoApi.infoEntry = mapEntradaInfoToEntradaInfoApi(historico as IEntradaInfo);
  } else if (historico.tipo === EHistoricoType.Saida) {
      historicoApi.infoExit = mapSaidaInfoToSaidaInfoApi(historico as ISaidaInfo);
  }

  return historicoApi;
}

function mapEHistoricoTypeToNumber(type: EHistoricoType): number {
  // Map EHistoricoType enum to corresponding number
  switch (type) {
      case EHistoricoType.Entrada:
          return 1;
      case EHistoricoType.Saida:
          return 2;
      // Add more cases as needed
      default:
          return 0;
  }
}

function mapEntradaInfoToEntradaInfoApi(entradaInfo: IEntradaInfo): IEntradaInfoApi {
  return {
      phoneNumber: entradaInfo.celular,
      contactNumber: entradaInfo.celularResponsavel,
      educationLevel: entradaInfo.escolaridade,
      occupation: entradaInfo.profissao,
      searchReason: entradaInfo.motivoProcura,
      responsibleName: entradaInfo.nomeResponsavel,
      finencialAssistence: entradaInfo.beneficio,
      faceFrontPhoto: '', // Add logic to map photos
      faceLeftPhoto: '',
      faceRightPhoto: '',
      fullBodyPhoto: '',
  };
}

function mapSaidaInfoToSaidaInfoApi(saidaInfo: ISaidaInfo): ISaidaInfoApi {
  return {
      reason: saidaInfo.razao,
      personContacted: saidaInfo.pessoaInformada,
      isDropout: saidaInfo.ehDesistencia,
  };
}
