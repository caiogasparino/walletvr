import React from 'react';
import {Colors, Typography} from '@UIKit';
import {Images} from '@assets/images';
import {useNavigation} from '@react-navigation/native';
import {Container, ButtonArrow, ContainerHeaderTitle} from './styles';
import {IHeaderCardsProps} from './IHeaderCards';

const Arrow = Images.icons.arrowLeft;
const Add = Images.icons.add;

export const HeaderCards: React.FC<IHeaderCardsProps> = ({label, title}) => {
  const navigation: {
    goBack(): void;
    navigate: (arg0: string) => void;
  } = useNavigation();

  return (
    <React.Fragment>
      <Container>
        <ButtonArrow onPress={() => navigation.goBack()}>
          <Arrow width={20} height={20} color={Colors.primaryWhite} />
        </ButtonArrow>
        <Typography
          size={22}
          lineHeight={24}
          weight="400"
          color={Colors.primary}>
          {label}
        </Typography>
        <ButtonArrow onPress={() => navigation.navigate('WalletRegister')}>
          <Add width={20} height={20} color={Colors.primaryWhite} />
        </ButtonArrow>
      </Container>
      <ContainerHeaderTitle>
        <Typography
          size={20}
          lineHeight={22}
          weight="400"
          color={Colors.btnPrimary}>
          {title}
        </Typography>
      </ContainerHeaderTitle>
    </React.Fragment>
  );
};
