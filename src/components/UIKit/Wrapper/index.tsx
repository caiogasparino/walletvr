import React from 'react';
import {Gradient, Transparent, White} from './styles';
import {IWrapper} from './IWrapper';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const Wrapper: React.FC<IWrapper> = props => {
  const {children, color, paddingBottom, paddingTop} = props;

  const pb =
    paddingBottom && paddingBottom > -1 ? paddingBottom : getStatusBarHeight();
  const pt = paddingTop && paddingTop > -1 ? paddingTop : getStatusBarHeight();

  switch (color) {
    case 'gradient':
      return (
        <Gradient pb={pb} pt={pt}>
          {children}
        </Gradient>
      );
    case 'white':
      return (
        <White pb={pb} pt={pt}>
          {children}
        </White>
      );
    default:
      return <Transparent>{children}</Transparent>;
  }
};
