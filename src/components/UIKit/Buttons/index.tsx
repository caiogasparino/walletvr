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
  paddingVertical,
  paddingHorizontal,
}) => {
  return (
    <ButtonContainer
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      paddingVertical={paddingVertical}
      paddingHorizontal={paddingHorizontal}
      style={{
        width: width,
        height: height,
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
