import { combineReducers, configureStore } from '@reduxjs/toolkit';
import headersSlice from './additionalHeaders';
import editorSlice from './editorSlice';

const rootReducer = combineReducers({
  headersSlice,
  editorSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootStore = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
