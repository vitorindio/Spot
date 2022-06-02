export interface IUser {
  id: number
  name: string
  email: string
  rememberMeToken: string
  createdAt: string
  updatedAt: string
}
export class User implements IUser {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public rememberMeToken: string,
    public createdAt: string,
    public updatedAt: string
  ) {}
}
