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
}

export class UserResponse {
  constructor(
    public accessToken: string
  ) {}
}
