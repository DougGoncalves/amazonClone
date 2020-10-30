import React, { useEffect } from 'react'
import './App.css';
import Header from './components/Header'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import Payment from './pages/Payment'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {useStateValue} from './services/StateProvider'
import {auth} from './firebase'

function App() {
const [{}, dispatch] = useStateValue();

useEffect(() => {

  auth.onAuthStateChanged(authUser => {
    console.log('THE USER IS >>>', authUser);

    if(authUser) {
      dispatch({
        type: 'SET_USER',
        user: authUser
      })
    } else {
      dispatch({
        type: 'SET_USER',
        user: null
      })
    }
  })
}, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/payment">
            <Header/>
            <Payment/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
