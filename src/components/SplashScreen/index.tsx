import React, {useEffect} from 'react';
import {Lottie} from '../UIKit/Lottie';
import {Wallet} from '../../animations';
import {Centralized} from './styles';
import {useNavigation} from '@react-navigation/native';

export const SplashScreen = () => {
  const navigation: {navigate: (arg0: string) => void} = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('WalletStart');
    }, 5000);
  }, [navigation]);

  return (
    <Centralized>
      <Lottie source={Wallet} autoPlay loop={false} width={72} height={72} />
    </Centralized>
  );
};
