import React from 'react';

import {CustomDividerProps} from './IDivider';
import {DividerContainer} from './styles';

export const Divider: React.FC<CustomDividerProps> = props => {
  return <DividerContainer {...props} />;
};
