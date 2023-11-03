import React from 'react';
import LottieView from 'lottie-react-native';
import {Normalize} from '@UIKit';
import {ILottie} from './ILottie';

const CustomComponent: React.FC<ILottie> = props => {
  const {source, height, width, autoPlay, loop} = props;
  const dimensions = {
    width: Normalize(width),
    height: Normalize(height),
  };
  return (
    <LottieView
      source={source}
      loop={loop}
      autoPlay={autoPlay}
      style={dimensions}
    />
  );
};

export const Lottie = React.memo(CustomComponent);
