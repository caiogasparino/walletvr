import React from 'react';
import {
  ImageBackground,
  ImageBackgroundProps,
  View,
  ViewProps,
  ViewStyle,
  StyleSheet,
} from 'react-native';

interface ImageBackgroundWrapperProps extends ImageBackgroundProps {
  children: React.ReactNode;
  containerStyle?: ViewProps['style'];
  defaultContainerStyle?: ViewStyle;
}

export const WrapperImage: React.FC<ImageBackgroundWrapperProps> = ({
  children,
  containerStyle,
  source,
  style,
  defaultContainerStyle,
  ...imageBackgroundProps
}) => {
  const mergedContainerStyle = [
    styles.defaultContainer,
    defaultContainerStyle,
    containerStyle,
  ];

  return (
    <ImageBackground
      source={source}
      style={style}
      resizeMode="cover"
      imageStyle={styles.imagemStyle}
      {...imageBackgroundProps}>
      <View style={mergedContainerStyle}>{children}</View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  defaultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagemStyle: {
    marginVertical: -170,
    marginHorizontal: -100,
  },
});
