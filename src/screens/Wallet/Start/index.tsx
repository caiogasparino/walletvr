import React from 'react';
import {Container} from './styles';
import {Button, Colors, Divider, Typography, WrapperImage} from '@UIKit';
import {useNavigation} from '@react-navigation/native';

interface IStart {}

const title = 'Wallet Test';
const labelCard = 'meus cartões';
const labelRegisterCard = 'cadastrar cartão';

export const Start: React.FC<IStart> = () => {
  const navigation: {navigate: (arg0: string) => void} = useNavigation();
  return (
    <Container>
      <WrapperImage source={require('../../../assets/images/bganimate.png')}>
        <Typography
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
