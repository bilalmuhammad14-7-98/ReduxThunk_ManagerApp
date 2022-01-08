/* eslint-disable prettier/prettier */
import React, {Component, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers';
// import * as firebase from 'firebase/app';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component {
  componentDidMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyAFx-C3Aodyifhz17X-LoYFm0JOVsq-DFM',
      authDomain: 'manager-99c92.firebaseapp.com',
      projectId: 'manager-99c92',
      storageBucket: 'manager-99c92.appspot.com',
      messagingSenderId: '579839058691',
      appId: '1:579839058691:web:dfa7904a2aed09b9893f36',
      measurementId: 'G-9QRWDYRFYD',
    };

    // Initialize Firebase

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    console.log('Hello');
  }

  render() {
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
      reducers,
      {},
      composeEnhancers(applyMiddleware(ReduxThunk)),
    );

    return (
      <Provider store={store}>
        {/* <LoginForm /> */}
        <Router />
      </Provider>
    );
  }
}

export default App;
