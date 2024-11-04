import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
<<<<<<< HEAD
import './styles/App.css'; // استایل‌های اصلی اپلیکیشن
=======
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import './styles/global.css';
>>>>>>> dev

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
<<<<<<< HEAD
  </React.StrictMode>
=======
  </ThemeProvider>
>>>>>>> dev
);