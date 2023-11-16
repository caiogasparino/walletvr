import React from 'react';
import {IButtonProps} from './IButtons';
import {ButtonContainer, ButtonText} from './styles';
import {Typography} from '@UIKit';

export const Button: React.FC<IButtonProps> = ({
  testID,
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
  borderRadius = 12,
  paddingVertical,
  paddingHorizontal,
  marginTop,
  marginBottom,
  disabled,
}) => {
  return (
    <ButtonContainer
      testID={testID}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      paddingVertical={paddingVertical}
      paddingHorizontal={paddingHorizontal}
      marginTop={marginTop}
      marginBottom={marginBottom}
      disabled={disabled}
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
