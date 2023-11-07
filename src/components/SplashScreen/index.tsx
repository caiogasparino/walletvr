import React, {useEffect} from 'react';
import {Lottie} from '@UIKit';
import {Wallet} from '@animations';
import {Centralized} from './styles';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');

export const SplashScreen = () => {
  const navigation: {navigate: (arg0: string) => void} = useNavigation();
  const route: RouteProp<{params: {screen: string}}> = useRoute();

  const screen = route.params?.screen;

  useEffect(() => {
    setTimeout(() => {
      if (screen) {
        navigation.navigate(screen);
      } else {
        navigation.navigate('WalletStart');
      }
    }, 1000);
  }, [screen, navigation]);

  return (
    <Centralized>
      <Lottie
        source={Wallet}
        autoPlay
        loop={true}
        height={height}
        width={width}
      />
    </Centralized>
  );
};
