import React from 'react';
import ReactDOM from 'react-dom/client';
import Spa from './App';
import {BrowserRouter} from 'react-router-dom'
import { StoreProvider } from './AppState/Store';
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
  <BrowserRouter>
    <StoreProvider>
      <Spa />
    </StoreProvider>
  </BrowserRouter>
</React.StrictMode>
);