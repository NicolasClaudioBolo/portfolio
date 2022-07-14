import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import Profile from './views/Profile';
import Experience from './views/Experience';
import Skills from './views/Skills';
import Contact from './views/Contact';
import './App.css'

const App = () => {
  return (
    <div> 
      <Router>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Profile' element={<Profile />} />
            <Route path='/Experience' element={<Experience />} />
            <Route path='/Skills' element={<Skills />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>
        <Footer />
      </Router> 
    </div>
  )
}

export default App

