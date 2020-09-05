import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import { Button } from '@material-ui/core';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './Components/About/About';
import News from './Components/News/News';
import Contact from './Components/Contact/Contact';
import NotMatch from './Components/NotMatch/NotMatch';
import Comments from './Components/Comments/Comments';
import AuthorImg from './Components/AuthorImg/AuthorImg';


function App() {
  return (
    <div >
       <Router>
      <Header></Header>
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/News/:newsId">
            <News />
          </Route>
          <Route path="/Comments/:newsId">
            <Comments />
          </Route>
          <Route path="/AuthorImg">
            <AuthorImg />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
          <NotMatch/>
          </Route>
        </Switch>
     
    </Router>
      
      
      

    </div>
  );
}

export default App;
