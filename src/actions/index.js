import {EMAIL_CHANGED} from './types';
import {PASSWORD_CHANGED, LOGIN_USER_SUCCESS} from './types';
import firebase from 'firebase';

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};

export const LoginUser = ({email, password}) => {
  return dispatch => {
    // firebase.auth().signInWithEmailAndPassword(email, password)
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log(user, 'user');
        dispatch({
          type: LOGIN_USER_SUCCESS,
          payload: user,
        });
      });
  };
};
