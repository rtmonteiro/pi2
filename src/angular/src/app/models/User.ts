export class User {
  constructor(
    public email: string,
    public password: string
  ) { }
}

export class UserResponse {
  constructor(
    public token: string
  ) {}
}