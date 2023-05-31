import { createContext, useContext } from 'react';
import Lang from './lang';
import TaskList from './taskList';
import Modals from './modals';

const store = {
  langStore: new Lang(),
  taskListStore: new TaskList(),
  modalsStore: new Modals(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext<typeof store>(StoreContext);
};
