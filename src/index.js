import React from "react"
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from "./store"
import App from "./App"
import reportWebVitals from './reportWebVitals'
import './App.css'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

reportWebVitals()