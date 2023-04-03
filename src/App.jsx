import React, { useState } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Curriculo from './components/Curriculo/Curriculo';
import Projects from './components/Projects/Projects';

function App() {

  return (
    <>
      <Header></Header>
      
      <Curriculo></Curriculo>
      <Projects></Projects>

      <Footer></Footer>
    </>
  )
}

export default App;
