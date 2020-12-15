import React, { useState } from 'react'
import './Login.css'

import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase'


function Login() {
    const history = useHistory();
    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');
    const signIn = e => {
        e.preventDefault();
        //Firebase Login
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => {
            alert(error.message)
        })
    }
    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth)
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
        //More firebase registration
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img src='/images/white-amazon.PNG' alt="amazon logo" className="login_logo"/>
            </Link>
            <div className='login_container'>
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => {
                        setEmail(e.target.value)}} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => {
                        setPassword(e.target.value)
                    }} />
                    <button type='submit' onClick={signIn} className='login_signInButton'>LogIn</button>
                </form>
                <p>By Signin-in, you agree to the AMAZONE CLONE terms and services.Please see Our cookies
                Notice, Our Privacy Notice and Our Ads Based Notice
                </p>
                <button onClick={register} className='login_registerButton'>Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
