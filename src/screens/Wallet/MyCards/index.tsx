import React, {useContext, useState} from 'react';
import {CardContain, Contain, Container} from './styles';
import {Button, Card, Colors, HeaderCards, Typography} from '@UIKit';
import {WalletContext} from 'context';
import {Animated, Dimensions} from 'react-native';
import {Easing} from 'react-native-reanimated';

interface IWalletMyCards {}

const title = 'Meus Cartões';
const labelSelectCard = 'usar este cartão';
const labelRegister = 'Wallet Test';
const labelPaymentButton = 'pagar com este cartão';
const height = Dimensions.get('screen').height;
const cardHeight = -height / 2 + 135;

export const MyCards: React.FC<IWalletMyCards> = () => {
  const createCardContext = useContext(WalletContext);
  const {addCardResponse} = createCardContext;

  const [selectedCard, setSelectedCard] = useState<number | null>(0);
  const translateY = new Animated.Value(0);
  const scaleValue = new Animated.Value(1);

  const handleCardClick = (index: number) => {
    const updatedCards = [...addCardResponse];
    updatedCards.unshift(updatedCards.splice(index, 1)[0]);
    createCardContext.addCardResponse = updatedCards;

    setSelectedCard(index);

    Animated.timing(scaleValue, {
      toValue: 0.9,
      duration: 200,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start(() => {
      Animated.spring(scaleValue, {
        toValue: 1,
        stiffness: 100,
        damping: 10,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <React.Fragment>
      <HeaderCards label={labelRegister} title={title} />
      <Container>
        <Contain style={{transform: [{translateY: selectedCard ? 340 : 180}]}}>
          {addCardResponse?.map((card, index) => (
            <Animated.View
              key={index}
              style={{
                transform: [
                  {
                    translateY:
                      index === selectedCard ? translateY : cardHeight,
                  },
                ],
                zIndex: addCardResponse.length - index,
              }}>
              <CardContain key={index} onPress={() => handleCardClick(index)}>
                <Card
                  cardName={card.type}
                  name={card.name}
                  cardNumber={card.number}
                  cardDate={card.dateCard}
                  cardType={card.type}
                />
                {selectedCard !== 0 && index === 0 && (
                  <Button
                    marginTop={130}
                    marginBottom={-180}
                    label={labelPaymentButton}
                    labelWeight="400"
                    width={300}
                    height={55}
                    fontSize={18}
                    colorLabel={Colors.primaryWhite}
                    backgroundColor={Colors.btnPrimary}
                    onPress={() => {}}
                  />
                )}
                {selectedCard === 0 && index === 0 && (
                  <Typography
                    fontFamily="PTSansCaption-Regular"
                    size={16}
                    lineHeight={18}
                    weight="400"
                    color={Colors.primaryWhite}>
                    {labelSelectCard}
                  </Typography>
                )}
              </CardContain>
            </Animated.View>
          ))}
        </Contain>
      </Container>
    </React.Fragment>
  );
};
