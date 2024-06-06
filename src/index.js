// src/index.js
import './styles/luxury.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import App from './App';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

