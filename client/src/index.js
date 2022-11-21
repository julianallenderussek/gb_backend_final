import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppContextProvider } from './components/AppContext';
import { addresses, currentTransactions } from "./data";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  <AppContextProvider>
      <App/>
    </AppContextProvider>
  //</React.StrictMode>
);

