import React from 'react';
import {
  Container,
  InputContain,
  InputContainLeft,
  InputContainRight,
} from './styles';
import {
  Button,
  Colors,
  Divider,
  Typography,
  WrapperImage,
  Header,
  CreditCardInput,
  Input,
} from '@UIKit';
import {useNavigation} from '@react-navigation/native';
import {Images} from '@assets/images';

interface IWalletRegister {}

const labelRegister = 'Cadastro';
const labelTitle = 'Wallet Test';
const labelCard = 'nome de titular do cartão';
const labelDateCart = 'vencimento';
const labelSecuretyCode = 'código de segurança';
const labelRegisterCard = 'avançar';

export const Register: React.FC<IWalletRegister> = () => {
  const navigation: {
    goBack(): void;
    navigate: (arg0: string) => void;
  } = useNavigation();
  return (
    <Container>
      <WrapperImage source={Images.background.imageBackground}>
        <Header label={labelRegister} />
        <Typography
          size={28}
          lineHeight={32}
          weight="400"
          color={Colors.primaryWhite}>
          {labelTitle}
        </Typography>
        <Divider paddingBottom={20} />
        <CreditCardInput />
        <Divider paddingBottom={20} />
        <Input label={labelCard} />
        <Divider paddingBottom={20} />
        <InputContain>
          <InputContainLeft>
            <Input
              label={labelDateCart}
              inputType="datecard"
              keyboardType="numeric"
              maxLength={5}
              placeholder="00/00"
            />
          </InputContainLeft>
          <Divider paddingBottom={20} />
          <InputContainRight>
            <Input
              label={labelSecuretyCode}
              inputType="codecard"
              keyboardType="numeric"
              maxLength={3}
              placeholder="***"
            />
          </InputContainRight>
        </InputContain>
        <Divider paddingBottom={40} />
        <Button
          label={labelRegisterCard}
          labelWeight="400"
          width={300}
          height={55}
          fontSize={18}
          borderRadius={12}
          colorLabel={Colors.primaryGrey}
          backgroundColor={Colors.primaryWhite}
          onPress={() => navigation.navigate('WalletRegister')}
        />
      </WrapperImage>
    </Container>
  );
};
