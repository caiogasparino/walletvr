import React, {useEffect} from 'react';

import SplashScreen from 'react-native-splash-screen';
import {ScreenRoutes} from './src/routes';
import {Wrapper} from './src/components/UIKit';

function App() {
  useEffect(() => {
    // Simulate an authentication check
    // You should replace this with your actual authentication logic
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <Wrapper>
      <ScreenRoutes initialRouteName="WalletStart" />
    </Wrapper>
  );
}

export default App;
