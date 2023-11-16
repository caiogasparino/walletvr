import React, {useEffect} from 'react';
import {Lottie} from '@UIKit';
import {Wallet} from '@animations';
import {Centralized} from './styles';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const SplashScreen = () => {
  const navigation: {navigate: Function; goBack: Function} = useNavigation();
  const route = useRoute<RouteProp<{params: {screen: string}}>>();
  const screen = route.params?.screen;

  useEffect(() => {
    const redirectToScreen = () => {
      if (screen === 'Start') {
        navigation.navigate('WalletStart');
      } else {
        navigation.navigate(screen || 'WalletStart');
      }
    };

    const timeoutId = setTimeout(redirectToScreen, 3000);

    return () => clearTimeout(timeoutId);
  }, [screen, navigation]);

  return (
    <Centralized>
      <Lottie source={Wallet} autoPlay loop height={height} width={width} />
    </Centralized>
  );
};
