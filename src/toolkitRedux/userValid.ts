import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UserValid {
  userToken: string | undefined;
}

const initialState: UserValid = {
  userToken: '',
};

export const userSlice = createSlice({
  name: 'userValid',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<string | undefined>) {
      state.userToken = action.payload;
    },
  },
});

export default userSlice.reducer;
