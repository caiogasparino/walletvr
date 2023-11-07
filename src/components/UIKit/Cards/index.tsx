import React from 'react';

import {ICardProps} from './ICardProps';
import {CardContainer, Contain, TextContain, TitleContain} from './styles';
import {Colors, Divider, Typography} from '@UIKit';
import {creditCardMask} from '@Utils';

export const Card: React.FC<ICardProps> = ({
  cardName,
  name,
  cardNumber,
  cardDate,
  cardType,
  opacity,
}) => {
  const colorLabel =
    cardType === 'Black Card' ? Colors.primaryWhite : Colors.primaryText;
  return (
    <CardContainer opacity={opacity} cardType={cardType}>
      <Contain>
        <TitleContain>
          <Typography size={18} lineHeight={20} color={colorLabel}>
            {cardName}
          </Typography>
        </TitleContain>
        <Divider paddingBottom={10} />
        <TextContain>
          <Typography size={16} lineHeight={18} color={colorLabel}>
            {name}
          </Typography>
          <Typography size={14} lineHeight={16} color={colorLabel}>
            {creditCardMask(cardNumber as string)}
          </Typography>
          <Typography size={14} lineHeight={16} color={colorLabel}>
            {cardDate}
          </Typography>
        </TextContain>
      </Contain>
    </CardContainer>
  );
};
