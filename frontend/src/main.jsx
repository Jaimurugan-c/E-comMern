// src/main.jsx
import './index.css'; // ✅ import first
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ShopContextProvider } from './context/ShopContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </React.StrictMode>
);
