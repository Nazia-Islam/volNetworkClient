import React, { useState, useContext } from 'react';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import { Button } from 'react-bootstrap';
import firebaseConfig from './firebase.config';
import { myUserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(myUserContext);
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignin = () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            const {displayName, email} = res.user;
            console.log(email);
            const newUser = {
                isSignedIn: true,
                email: email,
                name: displayName
            };
            setLoggedInUser(newUser);
            history.replace(from);
          })
          .catch(error => {
            
        });
    }
    
    return (
        <div className="bg-login">
            <div className="login-box">
                <h4>Login With</h4>
                {/* <Button onClick={handleGoogleSignin}>Continue with Google</Button> */}
                <div onClick={handleGoogleSignin} class="google-btn">
                    <div class="google-icon-wrapper">
                        <img class="google-icon" alt="" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                    </div>
                    <p class="btn-text">Continue with google</p>
                </div>
                <p><small>Don't have an account? <a className="create-acc-link" href="http://gmail.com">Create an account</a></small></p>
            </div>
        </div>
    );
};

export default Login;