import React from 'react';

import {CustomDividerProps} from './IDivider';
import {DividerContainer, DividerContainerShadow} from './styles';

export const Divider: React.FC<CustomDividerProps> = props => {
  return <DividerContainer {...props} />;
};

export const DividerShadow: React.FC<CustomDividerProps> = props => {
  return <DividerContainerShadow {...props} />;
};
