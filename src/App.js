import React, { useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header/Header';
import Home from "./pages/Home/Home";
import CheckOut from './pages/Checkout/Checkout';
import Login from './pages/Login/Login';
import PaymentPage from './pages/PaymentPage/PaymentPage';
import { auth } from './firebase'
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import './App.css';


const promise = loadStripe('pk_test_51HZ47YCevvooPVXjvQVUZU8rYor7714btyt40Cqt8AH45lp2UNTSoDJ6XEdxKcGHKdX9WUykoQg1Ako3iwXssuOc00AxsLdLj2');

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged( authUser =>{
      console.log('user', authUser );
      
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
    <div className='app'>
      <Switch>
        <Route exact path='/'>
          <Header />
          <Home />
        </Route>
        <Route path='/checkout'>
          <Header />
          <CheckOut />
        </Route>
        <Route path='/payment'>
          <Header />
          <Elements stripe={promise}>
          <PaymentPage />
          </Elements>
        </Route>
        <Route path='/login' component={Login} />
      </Switch>

    </div>
    </Router>
  );
}

export default App;
