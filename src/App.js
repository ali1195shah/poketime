import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom' 
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar /> 
          <Route exact path='/' component={ Home }/>
          <Route path='/about' component={ About }/>
          <Route path='/contact' component={ Contact }/>

        </div>
      </BrowserRouter>

    );
  }
}

export default App;
 