import {EMAIL_CHANGED} from '../actions/types';
import {PASSWORD_CHANGED} from '../actions/types';
import {LOGIN_USER_SUCCESS} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
};

export default (state = INITIAL_STATE, action) => {
  console.log(action, 'actionnnnn');
  switch (action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.payload};

    case PASSWORD_CHANGED:
      return {...state, password: action.payload};

    case LOGIN_USER_SUCCESS:
      return {...state, user: action.payload};
    default:
      return state;
  }
};
