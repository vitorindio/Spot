export interface ILoginForm {
  email: string
  password: number
}

export class LoginForm implements ILoginForm {
  constructor(public email: string, public password: number) {}
}
