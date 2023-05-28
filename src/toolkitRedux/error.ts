import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Error {
  error: string | undefined;
}

const initialState: Error = {
  error: '',
};

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    addError(state, action: PayloadAction<string | undefined>) {
      state.error = action.payload;
    },
  },
});

export default errorSlice.reducer;
