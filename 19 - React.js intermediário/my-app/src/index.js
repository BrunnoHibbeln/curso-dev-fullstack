import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createTheme,
  ThemeProvider
} from '@material-ui/core/styles'

import App from './App'
import './index.css'

const theme = createTheme({
  palette: {
    primary: {
      light: '#654fff',
      main: '#651fff',
    },
    secondary: {
      main: '#452334',
    }
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
