// Purpose: this is the root component of you React application, serving as the MAIN container for all other components
// import { useState } from 'react'
import './App.css';
import Header from './components/Header'
import HomePage from './components/HomePage'
import Navbar from './components/Footer'


function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Navbar />
    </>
  );
}

export default App;
