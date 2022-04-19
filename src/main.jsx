import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter }from "react-router-dom"
import { StyledEngineProvider } from '@mui/material/styles'
import "./main.css"

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <StyledEngineProvider injectFirst>

        <App />
      </StyledEngineProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
)
