import { User } from '../interfaces/user.interface';

type allowedValues = "administrator" | "employee";
export class UserModel implements User {
  constructor(public id: number,
    public name: string, 
    public email: string, 
    public password: string,
    public role?: allowedValues
  ) {}
}