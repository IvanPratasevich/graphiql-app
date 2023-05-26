import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducers = combineReducers({});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducers,
  });
};

export type RootStore = ReturnType<typeof rootReducers>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
