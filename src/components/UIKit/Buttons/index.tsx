// Button.tsx

import React from 'react';
import {ButtonProps} from './IButtons';
import {ButtonContainer, ButtonText} from './styles';
import {Typography} from '@UIKit';

export const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  color,
  backgroundColor,
  size,
  lineHeight = 22,
  colorLabel,
  labelWeight,
  width,
  height,
  borderRadius,
  padding,
}) => {
  return (
    <ButtonContainer
      backgroundColor={backgroundColor}
      style={{
        width: width,
        height: height,
        borderRadius: borderRadius,
        padding: padding,
      }}
      onPress={onPress}>
      <ButtonText color={color}>
        <Typography
          size={size}
          lineHeight={lineHeight}
          weight={labelWeight}
          color={colorLabel}>
          {label}
        </Typography>
      </ButtonText>
    </ButtonContainer>
  );
};
