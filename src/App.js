import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import Experience from './views/Experience';
import Skills from './views/Skills';
import Resume from './views/Resume';

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
        <Router>
          <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Experience' element={<Experience />} />
              <Route path='/Skills' element={<Skills />} />
              <Route path='/Resume' element={<Resume />} />
            </Routes>
          <Footer />
        </Router> 
      </ThemeProvider>
    </div>
  )
}

export default App

