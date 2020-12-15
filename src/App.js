import './App.css';
import React, { useEffect } from 'react';
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout';
import Login from './Login';
import Orders from './Orders';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import { auth } from './firebase';
import { useStateValue } from './StateProvider'
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Footer from './Footer';
import Slider from './Slider';

const promise = loadStripe('pk_test_51Hw66gDEJFnjUlzEpl35zuFXCBvS2j31SvL9yx5USsTxNytvA9qiRJN37BL7rs7T1X7PpYC0TXxUWukJ2CaoGIVL00TkGDniqf')

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect (() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The User is ', authUser)

      if (authUser) {
        //the user just logged in or the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="App">
      <Switch>
          <Route path='/login'>
              <Login />
          </Route>
          <Route path='/orders'>
              <Header />
              <Orders />
          </Route>
          <Route path='/checkout'>
              <Header />
              <Checkout />
          </Route>
          <Route path='/payment'>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
          </Route>
          <Route path='/'>
              <Header />
              <Home />
              <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
