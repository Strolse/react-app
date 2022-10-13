import { DeepPartial } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateShema } from '../config/stateShema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateShema>;
}

export const StoreProvider = ({ children, initialState }:StoreProviderProps) => {
  const store = createReduxStore(initialState as StateShema);
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
