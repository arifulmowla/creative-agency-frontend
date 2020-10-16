import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import './login.scss';
import logo from '../../images/logos/logo.png';
import google from '../../images/google-logo.svg';



// firebase authentication
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { UserContext } from '../../App';
import { Link, useHistory } from 'react-router-dom';


import { firebaseConfig } from '../../firebaseConfig';
import { isAdmin } from '../../Store/Store';
firebase.initializeApp(firebaseConfig);

const Login = () => {

    

    const provider = new firebase.auth.GoogleAuthProvider();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();


    const handleLogin = () => {
        firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            var user = result.user;
            firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
                
            // The signed-in user info.
                        
                let userData = {
                isAuthenticated: true,
                name: user.displayName,
                email: user.email,
                photoUrl: user.photoURL,
                role: 0
            }
            
                isAdmin(user.email).then(result => {
                    console.log(result)
                    let redirect = '/order';
                    if (result) {
                        userData.role = 1;
                        redirect = '/dashboard/services-list/';
                    } else {
                        userData.role = 0;
                    }
                    sessionStorage.setItem('user', JSON.stringify(userData))
                    sessionStorage.setItem('token', idToken)
                    setLoggedInUser(userData)
                    history.push(redirect);
                    console.log(loggedInUser)

                })  
            
        }).catch(function(error) {
        // Handle error
        });


      
        // ...
        }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        });
    }

    return (
        <div className="login">
            <Container>
                <div className="login-middle my-md-5">
                    <div className="logo-box mb-5">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="login-box">
                        <div>
                            <h3 className="pb-5">Login with</h3>
                        <div className="google" onClick={handleLogin}>
                        <a className="btn-google">
                            <div className="google-content">
                                <div className="logo">
                                    <img src={google} alt="google"/>
                                </div>
                                    <div className="text">
                                        <p>Sign in with Google</p>
                                </div>
                            </div>
                        </a>
                            </div>
                            <p className="text-center pt-3">Don’t have an account? <a href="#">Create an account</a></p>
                    </div>
                    </div>

               </div>
            </Container>
        </div>
    );
};

export default Login;