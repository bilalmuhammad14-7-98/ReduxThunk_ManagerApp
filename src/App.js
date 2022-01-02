import React, {Component, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
// import * as firebase from 'firebase/app';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';

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
    const app = firebase.initializeApp(firebaseConfig);
    // const app = firebase.initializeApp(firebaseConfig);
    // console.log(app);
    console.log('Hello');
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View>
          {/* <Text>Hello World</Text> */}
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
