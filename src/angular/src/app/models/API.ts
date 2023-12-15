export interface IAcolhidoApi {
    id: number,
    name: string,
    mother: string,
    father: string,
    birthDate: string,
    gender: number,
    nationality: string,
    address: IEnderecoApi
    documents: IDocumentoApi[];
}

export interface IDocumentoApi {
    type: number,
    value: string,
    name: string,
    isDeleted: boolean
}

export interface IEnderecoApi {
    street: string,
    city: string,
    state: string,
    cep: string,
    country: string
}

export interface IHistoricoApi {
  registerDate: Date,
  typeInfo: number,
  infoEntry?: IEntradaInfoApi,
  infoExit?: ISaidaInfoApi
}

export interface IEntradaInfoApi {
  phoneNumber: string,
  contactNumber: string,
  educationLevel: string,
  occupation: string,
  searchReason: string,
  responsibleName: string,
  finencialAssistence: string,
  faceFrontPhoto: string,
  faceLeftPhoto: string,
  faceRightPhoto: string,
  fullBodyPhoto: string
}

export interface ISaidaInfoApi {
  reason: string,
  personContacted: string,
  isDropout: boolean
}
