import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISessionState } from './types/sessionTypes';

const initialState: ISessionState = {
  username: '',
  session: false,
  error: '',
};

const rtkSlice = createSlice({
  name: 'sessionSlice',
  initialState,
  reducers: {
    startSession(
      state,
      action: PayloadAction<{
        user: string;
        session: boolean;
      }>
    ) {
      state.username = action.payload.user;
      state.session = true;
    },
    endSession(state) {
      state.username = '';
      state.session = false;
    },
    handleError(state, action: PayloadAction<{ message: string }>) {
      state.error = action?.payload?.message;
    },
  },
});

export default rtkSlice.reducer;
export const { startSession, endSession, handleError } = rtkSlice.actions;
