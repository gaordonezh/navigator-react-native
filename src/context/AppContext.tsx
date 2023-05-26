import { createContext, ReactNode, useContext } from 'react';
import { AppContextProps } from '../interfaces/global';

const AppContext = createContext({} as AppContextProps);

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
