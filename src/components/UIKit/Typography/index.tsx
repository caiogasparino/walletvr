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
    fontFamily,
    fontSize: size,
    lineHeight,
    fontWeight: weight,
    color,
    ...(style as TextStyle), // Ensure any custom styles are preserved
  };

  return <Text style={textStyle} {...rest} />;
};
