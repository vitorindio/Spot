import { UserType } from './enumerations/enumUserType'

export interface IUser {
  id?: number
  fullName?: string | null
  email?: string | null
  userType?: UserType | null
  rememberMeToken?: string | null
  createdAt?: string | null
  updatedAt?: string | null
}
export class User implements IUser {
  constructor(
    public id?: number,
    public fullName?: string | null,
    public email?: string | null,
    public userType?: UserType | null,
    public rememberMeToken?: string | null,
    public createdAt?: string | null,
    public updatedAt?: string | null
  ) {}
}
