import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Curriculum from './components/Curriculum/Curriculum';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Contador from './components/Teste/Contador';


import { Switch, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Switch>
        <Route exact path='/teste'>
            <Contador />
        </Route>
        <Route exact path='/'>
          <Header />

          <Curriculum />

          <Footer />
        </Route>

        <Route exact path='/projects' >
          <Header/>

          <Projects/>

          <Footer/>

        </Route>

        <Route exact path='/contact'>

          <Header/>

          <Contact/>

          <Footer/>
        </Route>
      </Switch>

    </>
  )
}

export default App;
