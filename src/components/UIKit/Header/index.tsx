import React from 'react';
import {Colors, Typography} from '@UIKit';
import {Images} from '@assets/images';
import {useNavigation} from '@react-navigation/native';
import {Container, ButtonArrow} from './styles';
import {HeaderProps} from './IHeader';

const Arrow = Images.icons.arrowLeft;

export const Header: React.FC<HeaderProps> = ({label}) => {
  const navigation: {
    goBack(): void;
  } = useNavigation();

  return (
    <Container>
      <ButtonArrow onPress={() => navigation.goBack()}>
        <Arrow width={24} height={24} color={Colors.primaryWhite} />
      </ButtonArrow>
      <Typography
        size={22}
        lineHeight={32}
        weight="400"
        color={Colors.btnPrimary}>
        {label}
      </Typography>
    </Container>
  );
};
