import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { StateShema } from './stateShema';

const rootReducers:ReducersMapObject<StateShema> = {
  counter: counterReducer,
  user: userReducer,
};

export function createReduxStore(initialState?: StateShema) {
  return configureStore<StateShema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
