import userEvent from '@testing-library/user-event';
import React, { useState } from 'react'

import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';

import './Login.css';


function Login() {
    const history = useHistory();
    const [email, SetEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
            if (auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
            <img className='login-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='' 
            />
            </Link>

            <div className='login-container'>
                <h1>Sign in</h1>
                <form>
                    <label for='email'>E-mail</label>
                    <input name='email' type='text' value={email} onChange={e => SetEmail(e.target.value)} />

                    <label for='password'>Password</label>
                    <input name='password' type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn}
                    className='login-signinButton'>Sign In</button>
                    </form> 

                    <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>

            </div>
           
            <h5>New to Amazon?</h5>
            
            <button onClick={register}
             className='login-registerButton'>Create your Amazon Account</button>
        </div>
    )
}

export default Login
