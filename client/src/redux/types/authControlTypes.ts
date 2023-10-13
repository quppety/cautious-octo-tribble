import { ISignInInputs, ISignUpInputs } from '../../components/auth/types';

export interface IAuthControlState {
  signUpInputs: ISignUpInputs;
  signInInputs: ISignInInputs;
}
