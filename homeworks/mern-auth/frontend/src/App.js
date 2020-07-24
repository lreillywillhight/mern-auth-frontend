import React from 'react';
// import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import About from './components/About'
import Welcome from './components/Welcome'

function App() {
  return (
    <div>
        <div className="react-router-logic">
            <Switch>
                <Route path='/signup' component={ Signup } />
                <Route path='/login' component={ Login } />
                <Route path='/about' component={ About } />
                <Route path='/' component={ Welcome } />
            </Switch>
        </div>
    </div>
  );
}

export default App;
