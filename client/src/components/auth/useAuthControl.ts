import { ChangeEvent, FormEvent, KeyboardEvent, MouseEvent } from 'react';
import { setSignInInputs, setSignUpInputs } from '../../redux/authControlSlice';
import { RootState } from '../../redux/store';
import { useAppDispatch, useAppSelector } from '../../redux/types/hooks';
import { handleError } from '../../redux/sessionSlice';
import { useNavigate } from 'react-router-dom';
import {
  signInUserThunk,
  signUpUserThunk,
} from '../../redux/thunks/thunkActionsAuth';

export const useAuthControl = () => {
  const { signInInputs, signUpInputs } = useAppSelector(
    (state: RootState) => state.authControl
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignInInputsChange = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(
      setSignInInputs({ ...signInInputs, [e.target.name]: e.target.value })
    );
  };

  const handleSignUpInputsChange = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(
      setSignUpInputs({ ...signUpInputs, [e.target.name]: e.target.value })
    );
  };

  const handleSignIn = async (
    e:
      | MouseEvent<HTMLButtonElement>
      | FormEvent<HTMLFormElement>
      | KeyboardEvent<HTMLInputElement>
  ): Promise<void> => {
    e.preventDefault();
    const res = await dispatch(signInUserThunk(signInInputs));
    if (res?.message) {
      setTimeout(() => {
        dispatch(handleError({ message: '' }));
        setSignInInputs({
          email: '',
          password: '',
        });
      }, 1500);
    } else {
      navigate('/');
    }
  };

  const handleSignUp = async (
    e:
      | MouseEvent<HTMLButtonElement>
      | FormEvent<HTMLFormElement>
      | KeyboardEvent<HTMLInputElement>
  ): Promise<void> => {
    e.preventDefault();
    const res = await dispatch(signUpUserThunk(signUpInputs));
    if (res?.message) {
      setTimeout(() => {
        dispatch(handleError({ message: '' }));
        setSignUpInputs({
          login: '',
          email: '',
          password: '',
        });
      }, 1500);
    } else {
      navigate('/');
    }
  };

  return {
    handleSignInInputsChange,
    handleSignUpInputsChange,
    handleSignIn,
    handleSignUp,
  };
};
