// Button.tsx

import React from 'react';
import {IButtonProps} from './IButtons';
import {ButtonContainer, ButtonText} from './styles';
import {Typography} from '@UIKit';

export const Button: React.FC<IButtonProps> = ({
  label,
  onPress,
  color,
  backgroundColor,
  fontSize,
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
      borderRadius={borderRadius}
      style={{
        width: width,
        height: height,
        padding: padding,
      }}
      onPress={onPress}>
      <ButtonText color={color}>
        <Typography
          size={fontSize}
          lineHeight={lineHeight}
          weight={labelWeight}
          color={colorLabel}>
          {label}
        </Typography>
      </ButtonText>
    </ButtonContainer>
  );
};
