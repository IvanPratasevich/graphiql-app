import { combineReducers, configureStore } from '@reduxjs/toolkit';
import headersSlice from './additionalHeaders';
import userSlice from './userValid';
import errorSlice from './error';

const rootReducer = combineReducers({
  headersSlice,
  userSlice,
  errorSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootStore = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
