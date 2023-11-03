import React from 'react';
import {Container} from './styles';
import {Button, Colors, Divider, Typography, WrapperImage} from '@UIKit';
import {useNavigation} from '@react-navigation/native';
import {Images} from '@assets/images';

interface IWalletMyCards {}

const title = 'Wallet Test';
const labelCard = 'meus cartões';
const labelRegisterCard = 'cadastrar cartão';

export const MyCards: React.FC<IWalletMyCards> = () => {
  const navigation: {navigate: Function} = useNavigation();

  return (
    <Container>
      <WrapperImage source={Images.background.imageBackground}>
        <Typography
          fontFamily="PTSansCaption-Regular"
          size={28}
          lineHeight={32}
          weight="400"
          color={Colors.primaryWhite}>
          {title}
        </Typography>
        <Divider paddingBottom={20} />
        <Button
          label={labelCard}
          labelWeight="400"
          width={300}
          height={55}
          fontSize={18}
          colorLabel={Colors.primaryWhite}
          backgroundColor={Colors.btnPrimary}
          onPress={() => navigation.navigate('WalletCards')}
        />
        <Divider paddingBottom={20} />
        <Button
          label={labelRegisterCard}
          labelWeight="400"
          width={300}
          height={55}
          fontSize={18}
          colorLabel={Colors.primary}
          backgroundColor={Colors.cardBg}
          onPress={() => navigation.navigate('WalletRegister')}
        />
      </WrapperImage>
    </Container>
  );
};
