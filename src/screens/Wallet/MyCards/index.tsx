import React, {useContext, useState, useRef, useEffect} from 'react';
import {
  ButtonContain,
  CardContain,
  Contain,
  Container,
  Scroll,
  position,
} from './styles';
import {Button, Card, Colors, HeaderCards, Typography} from '@UIKit';
import {WalletContext} from 'context';
import {Alert, Animated, Easing} from 'react-native';
import CardService from 'services/cardService';

interface IWalletMyCards {
  handleCardClick?: Function;
}

const title = 'Meus Cartões';
const labelSelectCard = 'usar este cartão';
const labelRegister = 'Wallet Test';
const labelPaymentButton = 'pagar com este cartão';
const topCards = -150;
const topCardsSelect = 490;

export const MyCards: React.FC<IWalletMyCards> = () => {
  const createCardContext = useContext(WalletContext);
  const {cards} = createCardContext;
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const opacity = useRef(new Animated.Value(1)).current;
  const [scale] = useState(new Animated.Value(1));

  const handleCardClick = (index: number) => {
    if (selectedCard !== null) {
      handleCleanCard();
    } else {
      setSelectedCard(index);
    }

    Animated.parallel([
      Animated.timing(opacity, {
        toValue: selectedCard !== null ? 1 : 0.5,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: false,
      }),
      Animated.spring(scale, {
        toValue: selectedCard !== null ? 1.1 : 1,
        stiffness: 100,
        damping: 4,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const handleCleanCard = () => {
    setSelectedCard(null);
  };

  useEffect(() => {
    const init = async () => {
      const cardService = new CardService();
      try {
        const response = await cardService.getCards();
        createCardContext.cards = response;
      } catch (error: any) {
        Alert.alert('Error getting cards', error.message);
      }
    };
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <HeaderCards label={labelRegister} title={title} />
      <Scroll>
        <Container>
          <Contain>
            {selectedCard !== null && (
              <CardContain
                style={{
                  transform: [{translateY: selectedCard !== null ? 80 : 0}],
                }}>
                <Card
                  cardName={cards?.[selectedCard]?.type}
                  name={cards?.[selectedCard]?.name}
                  cardNumber={cards?.[selectedCard]?.number}
                  cardDate={cards?.[selectedCard]?.dateCard}
                  cardType={cards?.[selectedCard]?.type}
                />
                <ButtonContain>
                  <Button
                    label={labelPaymentButton}
                    labelWeight="400"
                    width={300}
                    height={55}
                    fontSize={18}
                    colorLabel={Colors.primaryWhite}
                    backgroundColor={Colors.btnPrimary}
                    onPress={() => {}}
                  />
                </ButtonContain>
              </CardContain>
            )}
            {cards?.map((card, index) => (
              <Animated.View
                key={index}
                style={[
                  position.animate,
                  {
                    transform: [
                      {
                        translateY:
                          selectedCard === null ? topCards : topCardsSelect,
                      },
                      {scale: scale},
                    ],
                    top: index * 60,
                    opacity: opacity,
                  },
                ]}>
                <CardContain onPress={() => handleCardClick(index)}>
                  <Card
                    testId={`card-${index}`}
                    cardName={card.type}
                    name={card.name}
                    cardNumber={card.number}
                    cardDate={card.dateCard}
                    cardType={card.type}
                  />
                  <Typography
                    fontFamily="PTSansCaption-Regular"
                    size={16}
                    lineHeight={18}
                    weight="400"
                    color={Colors.primaryWhite}>
                    {labelSelectCard}
                  </Typography>
                </CardContain>
              </Animated.View>
            ))}
          </Contain>
        </Container>
      </Scroll>
    </React.Fragment>
  );
};
