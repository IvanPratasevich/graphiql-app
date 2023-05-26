import { combineReducers, configureStore } from '@reduxjs/toolkit';
import headersSlice from './additionalHeaders';

const rootReducer = combineReducers({
  headersSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootStore = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
