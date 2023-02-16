import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import TimesContextProvider from './context/TimesContext'
import PicturesContextProvider from './context/PicturesContext'
import DurationContextProvider from './context/DurationContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DurationContextProvider>
    <PicturesContextProvider>
    <TimesContextProvider>
    <App />
    </TimesContextProvider>
    </PicturesContextProvider>
    </DurationContextProvider>
  </React.StrictMode>
)
