import { createContext, useContext } from 'react';
import { HistoryStore } from './history-store';

export const historyStore = HistoryStore.init();
export const HistoryStoreContext = createContext(historyStore);
export const useHistoryStoreContext = () => useContext(HistoryStoreContext);
