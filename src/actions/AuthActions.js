/* eslint-disable prettier/prettier */
import {EMAIL_CHANGED} from './types';
import {Actions} from 'react-native-router-flux';
import {
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from './types';
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
    dispatch({type: LOGIN_USER});
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => LoginUserSuccess(dispatch, user))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => LoginUserSuccess(dispatch, user))
          .catch(() => LoginUserFail(dispatch));
      });
  };
};

const LoginUserFail = dispatch => {
  dispatch({type: LOGIN_USER_FAIL});
};

const LoginUserSuccess = (dispatch, user) => {
  dispatch({type: LOGIN_USER_SUCCESS, payload: user});
  Actions.main();
};
