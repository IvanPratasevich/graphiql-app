import { combineReducers, configureStore } from '@reduxjs/toolkit';
import headersSlice from './additionalHeaders';
import editorSlice from './editorSlice';
import userSlice from './userValid';
import errorSlice from './error';

const rootReducer = combineReducers({
  headersSlice,
  editorSlice,
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
