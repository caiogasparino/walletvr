import React from 'react';
import {Text, TextProps, TextStyle} from 'react-native';

interface TypographyProps extends TextProps {
  fontFamily?: string;
  size?: number;
  lineHeight?: number;
  weight?: 'normal' | 'bold' | '400' | '500' | '600' | '700' | '800';
  color?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  fontFamily = 'PTSansCaption-Regular',
  size,
  lineHeight,
  weight,
  color,
  style,
  ...rest
}) => {
  const textStyle: TextStyle = {
    fontFamily: fontFamily,
    fontSize: size,
    lineHeight: lineHeight,
    fontWeight: weight,
    color: color,
    ...(style as TextStyle),
  };

  return <Text style={textStyle} {...rest} />;
};
