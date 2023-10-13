import axios, { AxiosError } from 'axios';
import { startSession, endSession, handleError } from '../sessionSlice';
import { Dispatch } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import { SignInThunk, SignUpThunk } from '../types/sessionTypes';
import { ISignInInputs, ISignUpInputs } from '../../components/auth/types';

export const signUpUserThunk =
  (signUpData: ISignUpInputs): SignUpThunk =>
  async (dispatch: Dispatch) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/auth/signup',
        signUpData,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      dispatch(startSession(response.data));
      return response.data;
    } catch (err: AxiosError | any) {
      const { response } = err;
      dispatch(handleError(response?.data));
      return response.data;
    }
  };

export const signInUserThunk =
  (signInData: ISignInInputs): SignInThunk =>
  async (dispatch: Dispatch) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/auth/signin',
        signInData,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      dispatch(startSession(response.data));
      return response.data;
    } catch (err: AxiosError | any) {
      const { response } = err;
      dispatch(handleError(response?.data));
      return response.data;
    }
  };

export const signOutUserThunk = (): AppThunk => async (dispatch: Dispatch) => {
  try {
    await axios.get('http://localhost:3000/api/auth/logout', {
      withCredentials: true,
    });
    dispatch(endSession());
  } catch (err: AxiosError | any) {
    const { response } = err;
    dispatch(handleError(response?.data));
  }
};
