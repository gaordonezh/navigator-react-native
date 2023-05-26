import React from 'react';
import Navigation from './src/navigation';
import AppContextProvider from './src/context/AppContext';

const App = () => (
  <AppContextProvider>
    <Navigation />
  </AppContextProvider>
);

export default App;
