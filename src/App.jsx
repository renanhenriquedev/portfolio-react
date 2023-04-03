import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Curriculo from './components/Curriculo/Curriculo';
import Projects from './components/Projects/Projects';
import Contato from './components/Contato/Contato';


import { Switch, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Header />

          <Curriculo />

          <Footer />
        </Route>

        <Route exact path='/projects' >
          <Header/>

          <Projects/>

          <Footer/>

        </Route>

        <Route exact path='/contact'>

          <Header/>

          <Contato/>

          <Footer/>
        </Route>
      </Switch>

    </>
  )
}

export default App;
