import React from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";


// import components
import LandingPage from './components/LandingPage/LandingPage'
import MainPage from './components/MainPage/MainPage'

class App extends React.Component {
  render(){
    return (
      <div className="App">
  
        <Switch>
          <Route exact path='/' render={()=> <LandingPage/>}/>
          <Route exact path='/main' render={()=> <MainPage/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
