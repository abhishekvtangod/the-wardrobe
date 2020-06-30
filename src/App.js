import React from 'react';
import {Route, Link} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const Hatspage = props => {
  console.log(props)
  return(
      <div>
        <Link to='/'>Homepage </Link>
        <h1>HATS PAGE : {props.match.params.Id}</h1>
      </div>
  );
};


function App() {
  return (
    <div>
        <Route exact path = '/' component={HomePage}/>
        <Route path='/shop/hats' component={Hatspage}/>
    </div>
  );
}

export default App;
