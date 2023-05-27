import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IAdditionalHeaders {
  headers: boolean;
}

const initialState: IAdditionalHeaders = {
  headers: true,
};

export const headersSlice = createSlice({
  name: 'additionalHeaders',
  initialState,
  reducers: {
    changeHeaders(state, action: PayloadAction<boolean>) {
      state.headers = action.payload;
    },
  },
});

export default headersSlice.reducer;
