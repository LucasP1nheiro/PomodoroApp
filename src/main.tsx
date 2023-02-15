import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import TimesContextProvider from './context/TimesContext'
import PicturesContextProvider from './context/PicturesContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PicturesContextProvider>
    <TimesContextProvider>
    <App />
    </TimesContextProvider>
    </PicturesContextProvider>
  </React.StrictMode>
)
