export class User {
  constructor(
    public email: string,
    public password: string
  ) { }
}

export interface IUserModel {
  id: string,
  email: string,
  password: string,
  name: string,
  passwordConfimation: string,
}

export type IUserCreate = Omit<IUserModel, 'id' | 'name'>

export class UserResponse {
  constructor(
    public accessToken: string
  ) {}
}
