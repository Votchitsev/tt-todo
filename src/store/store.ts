import { createContext, useContext } from 'react';
import Lang from './lang';

const store = {
  langStore: new Lang(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext<typeof store>(StoreContext);
};
