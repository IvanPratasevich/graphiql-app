import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  main: {
    query: string;
  };

  headers: {
    query: string;
  };

  variables: {
    query: string;
  };

  makeRequest: boolean;
}

const initialState: IInitialState = {
  main: {
    query: '',
  },

  headers: {
    query: '',
  },

  variables: {
    query: `{"variable": "2"}`,
  },

  makeRequest: false,
};

export const editorSlice = createSlice({
  name: 'editorSlice',
  initialState,
  reducers: {
    changeMainQuery(state, action: PayloadAction<string>) {
      state.main.query = action.payload;
    },

    changeHeadersQuery(state, action: PayloadAction<string>) {
      state.headers.query = action.payload;
    },

    changeVariablesQuery(state, action: PayloadAction<string>) {
      state.variables.query = action.payload;
    },

    changeMakeRequest(state, action: PayloadAction<boolean>) {
      state.makeRequest = action.payload;
    },
  },
});

export default editorSlice.reducer;
