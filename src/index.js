import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ContextProvider from './utilities/ContextProvider';

const theme = createTheme({
  palette: {
    primary: {
      main: '#182F59',
    },
    secondary: {
      main: '#5BBC2E',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename='/JobPortal'>
      <ThemeProvider theme={theme}>
        <ContextProvider>
          <App />
        </ContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
