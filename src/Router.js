import React from 'react';
import {Scene, Router, Stack} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
  return (
    // <Router>
    //   <Scene key="root">
    //     <Scene key="login" component={LoginForm} title="Please Login" initial />
    //   </Scene>
    // </Router>

    <Router>
      <Stack key="root">
        <Scene key="login" component={LoginForm} title="Please Login" />
        {/* <Scene key="register" component={Register} title="Register" /> */}
        {/* <Scene key="home" component={Home} /> */}
      </Stack>
    </Router>
  );
};

export default RouterComponent;
