import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
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
  Card,
} from '@UIKit';
import {useNavigation} from '@react-navigation/native';
import {Images} from '@assets/images';
import {Alert, Animated} from 'react-native';
import CardService from 'services/cardService';
import {
  checkCreditCardType,
  isCardholderNameValid,
  isCreditCardValid,
  isExpiryDateValid,
  isSecurityCodeValid,
} from '@Utils';
import {WalletContext} from 'context';

interface IWalletRegister {}

const labelRegister = 'Cadastro';
const labelTitle = 'Wallet Test';
const labelSuccess = 'cartão cadastrado com sucesso';
const labelCard = 'nome de titular do cartão';
const labelDateCart = 'vencimento';
const labelSecuretyCode = 'código de segurança';
const labelRegisterCard = 'avançar';

export const Register: React.FC<IWalletRegister> = () => {
  const navigation: {
    goBack(): void;
    navigate: Function;
  } = useNavigation();
  const createCardContext = useContext(WalletContext);
  const [creditCardInput, setCreditCardInput] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvvCode, setCvvCode] = useState('');
  const [isValidation, setIsValidation] = useState(false);
  const [viewCard, setViewCard] = useState(false);
  const typeCard = checkCreditCardType(creditCardInput);

  const handleSubmit = async () => {
    if (
      isCreditCardValid(creditCardInput) &&
      isCardholderNameValid(cardholderName) &&
      isExpiryDateValid(expiryDate) &&
      isSecurityCodeValid(cvvCode)
    ) {
      try {
        const cardService = new CardService();
        const response = await cardService.addCard({
          number: creditCardInput,
          name: cardholderName,
          dateCard: expiryDate,
          cvv: cvvCode,
          type: typeCard,
        });
        if (response) {
          handleRegisterCards();
        }
        return;
      } catch (error: any) {
        Alert.alert('Error registering the card', error.message);
      }
    } else {
      Alert.alert('Form validation failed');
    }
  };

  const handleRegisterCards = async () => {
    setViewCard(true);
  };

  const handleMyCards = async () => {
    try {
      const cardService = new CardService();
      const response = await cardService.getCards();
      createCardContext.cards = response;
      navigation.navigate('Preload', {screen: 'WalletCards'});
    } catch (error: any) {
      Alert.alert('Error getting cards', error.message);
    }
  };

  useEffect(() => {
    if (
      creditCardInput.trim() &&
      cardholderName.trim() &&
      expiryDate.trim() &&
      cvvCode.trim()
    ) {
      setIsValidation(true);
    } else {
      setIsValidation(false);
    }
  }, [creditCardInput, cardholderName, expiryDate, cvvCode]);

  const springValue = useMemo(() => new Animated.Value(0), []);

  const animateView = useCallback(
    (toValue: number) => {
      Animated.spring(springValue, {
        toValue,
        stiffness: 120,
        damping: 5,
        useNativeDriver: false,
      }).start();
    },
    [springValue],
  );

  useEffect(() => {
    animateView(viewCard ? 1 : 0);
  }, [animateView, viewCard]);

  return (
    <Container>
      <WrapperImage source={Images.background.imageBackground}>
        <Header label={labelRegister} />
        <Animated.View
          style={{
            opacity: springValue,
            transform: [
              {
                translateY: springValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [30, 0],
                }),
              },
            ],
          }}>
          <Typography
            size={28}
            lineHeight={32}
            weight="400"
            color={Colors.primaryWhite}>
            {labelTitle}
          </Typography>
          <Divider paddingBottom={20} />
        </Animated.View>
        {!viewCard && (
          <React.Fragment>
            <Typography
              size={28}
              lineHeight={32}
              weight="400"
              color={Colors.primaryWhite}>
              {labelTitle}
            </Typography>
            <Divider paddingBottom={20} />
            <CreditCardInput onChangeText={setCreditCardInput} />
            <Divider paddingBottom={20} />
            <Input
              label={labelCard}
              onChangeText={setCardholderName}
              inputType="default"
            />
            <Divider paddingBottom={20} />
            <InputContain>
              <InputContainLeft>
                <Input
                  label={labelDateCart}
                  onChangeText={setExpiryDate}
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
                  onChangeText={setCvvCode}
                  inputType="codecard"
                  keyboardType="numeric"
                  maxLength={3}
                  placeholder="***"
                />
              </InputContainRight>
            </InputContain>
            <Divider paddingBottom={40} />
            <Button
              disabled={!isValidation}
              label={labelRegisterCard}
              labelWeight="400"
              width={300}
              height={55}
              fontSize={18}
              borderRadius={12}
              colorLabel={
                isValidation ? Colors.primaryWhite : Colors.primaryGrey
              }
              backgroundColor={
                isValidation ? Colors.btnPrimary : Colors.primaryWhite
              }
              onPress={handleSubmit}
            />
          </React.Fragment>
        )}
        {viewCard && (
          <React.Fragment>
            <Animated.View
              style={{
                opacity: springValue,
                transform: [
                  {
                    translateY: springValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [30, 0],
                    }),
                  },
                ],
              }}
            />
            <Typography
              size={20}
              lineHeight={22}
              weight="400"
              color={Colors.primaryWhite}>
              {labelSuccess}
            </Typography>
            <Card
              cardName={typeCard}
              name={cardholderName}
              cardNumber={creditCardInput}
              cardDate={expiryDate}
              cardType={typeCard}
            />
            <Divider paddingBottom={20} />
          </React.Fragment>
        )}
        <Animated.View
          style={{
            opacity: springValue,
            transform: [
              {
                translateY: springValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [30, 0],
                }),
              },
            ],
          }}>
          <Button
            disabled={!isValidation}
            label={labelRegisterCard}
            labelWeight="400"
            width={300}
            height={55}
            fontSize={18}
            borderRadius={12}
            colorLabel={isValidation ? Colors.primaryWhite : Colors.primaryGrey}
            backgroundColor={
              isValidation ? Colors.btnPrimary : Colors.primaryWhite
            }
            onPress={handleMyCards}
          />
        </Animated.View>
      </WrapperImage>
    </Container>
  );
};
