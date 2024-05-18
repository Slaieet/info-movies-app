import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'

import { MoviesContextProvider } from './context/moviesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MoviesContextProvider>
    <App />
  </MoviesContextProvider>
)
