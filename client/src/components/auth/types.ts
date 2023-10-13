export interface ISignInInputs {
  email: string;
  password: string;
}

export interface ISignUpInputs extends ISignInInputs {
  login: string;
}

