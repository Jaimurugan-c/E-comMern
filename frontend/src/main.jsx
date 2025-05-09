import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ShopContextProvider } from './context/ShopContext.jsx';

import App from './App.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ShopContextProvider>
  <App/>
  </ShopContextProvider>
  </StrictMode>,
)
