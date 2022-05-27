export interface ILoginForm {
    email?: string | null
    password?: number | null    
}

export class LoginForm implements ILoginForm{
    constructor(
       public email?: string | null,
       public password?: number | null
     
    ) {}
}