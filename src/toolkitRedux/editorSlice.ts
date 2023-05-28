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

  response: {
    query: string;
  };

  makeRequest: boolean;
}

const initialState: IInitialState = {
  main: {
    query: `query get($name: String!) {
      characters(page: 1, filter: { name: $name }) {
        info {
          count
        }
        results {
          name
        }
      }
    }`,
  },

  headers: {
    query: `{"Token": "123abc"}`,
  },

  variables: {
    query: `{"name": "Morty"}`,
  },

  response: {
    query: '',
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

    changeResponse(state, action: PayloadAction<string>) {
      state.response.query = action.payload;
    },
  },
});

export default editorSlice.reducer;
