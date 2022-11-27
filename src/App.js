import './App.css';
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';

const theme = createTheme({
  palette: {
    primary: {
      light: 'A2A8A4',
      main: '#03314B',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#fff',
      dark: '#FFSD2A',
      contrastText: '#000',
    },
    background: {
      default: 'A2A8A4',
    }
  },
});

const App = () => {
  return (
    <div style={{height:100}}>
      <ThemeProvider theme={theme}>
          <Header />
            <Home />
          <Footer />
      </ThemeProvider>
    </div>
  )
}

export default App

