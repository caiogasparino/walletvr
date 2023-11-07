import React from 'react';
import LottieView from 'lottie-react-native';
import {Normalize} from '@UIKit';
import {ILottie} from './ILottie';

const CustomComponent: React.FC<ILottie> = props => {
  const {source, height, width, autoPlay, loop} = props;
  const dimensions = {
    width: Normalize(width || 0),
    height: Normalize(height || 0),
  };
  return (
    <LottieView
      source={source}
      loop={loop}
      resizeMode="cover"
      autoPlay={autoPlay}
      style={dimensions}
    />
  );
};

export const Lottie = React.memo(CustomComponent);
