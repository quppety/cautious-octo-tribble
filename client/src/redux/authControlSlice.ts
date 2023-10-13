import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthControlState } from './types/authControlTypes';
import { ISignInInputs, ISignUpInputs } from '../components/auth/types';

const initialState: IAuthControlState = {
  signUpInputs: {
    login: '',
    email: '',
    password: '',
  },
  signInInputs: {
    email: '',
    password: '',
  },
};

const rtkSlice = createSlice({
  name: 'authControlSlice',
  initialState,
  reducers: {
    setSignInInputs: (state, action: PayloadAction<ISignInInputs>) => {
      state.signInInputs = action.payload;
    },
    setSignUpInputs: (state, action: PayloadAction<ISignUpInputs>) => {
      state.signUpInputs = action.payload;
    },
  },
});

export default rtkSlice.reducer;
export const { setSignInInputs, setSignUpInputs } = rtkSlice.actions;
