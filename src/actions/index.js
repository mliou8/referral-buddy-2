import { browserHistory } from 'react-router';
import Firebase from 'firebase';

export const SIGN_IN_USER = 'SIGN_IN_USER';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';
export const AUTH_USER = 'AUTH_USER';
export const AUTH_ERROR = 'AUTH_ERROR';

const config = {
  apiKey: "AIzaSyDO6D8JHajOU4Inp9ZKWgDuaohdm2PTiI4",
  authDomain: "referral-buddy.firebaseapp.com",
  databaseURL: "https://referral-buddy.firebaseio.com",
  storageBucket: "referral-buddy.appspot.com",
  messagingSenderId: "766913423082"
};


Firebase.initializeApp(config);


export function signUpUser(credentials) {
  return function(dispatch) {
    Firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(response => {
        dispatch(authUser());
        browserHistory.push('/myStuff');
      })
      .catch(error => {
        console.log(error);
        dispatch(authError(error));
      });
  }
}


export function signInUser(credentials) {
  return function(dispatch) {
    Firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(response => {
        dispatch(authUser());
        browserHistory.push('/myStuff');
      })
      .catch(error => {
        dispatch(authError(error));
      });
  }
}

export function signOutUser() {
  browserHistory.push('/');

  return {
    type: SIGN_OUT_USER
  }
}

export function verifyAuth() {
  return function (dispatch) {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(authUser());
      } else {
        dispatch(signOutUser());
      }
    });
  }
}

export function authUser() {
  return {
    type: AUTH_USER
  }
}

export function authError(error) {
  return {
    auth: AUTH_ERROR,
    payload: error
  }
}
