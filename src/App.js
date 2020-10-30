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
import {loadStripe} from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51Hhc8FHSBapjLfgBmOr4hXKVqOeVU1cYOnShN0hB3sXYXfWrHM1Tu6K9esFIc4tcFMjd8LVblGlc1wEoLwzidZYk00Qld2pJiv');

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
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
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
