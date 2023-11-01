import React from 'react';
import {Container} from './styles';
import {Button, Colors, Divider, Typography} from '@UIKit';

interface IStart {}

const title = 'Wallet Test';
const labelCard = 'meus cartões';
const labelRegisterCard = 'cadastrar cartão';

export const Start: React.FC<IStart> = () => {
  return (
    <Container>
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
        colorLabel={Colors.primaryWhite}
        backgroundColor={Colors.btnPrimary}
        onPress={() => {}}
      />
      <Divider paddingBottom={20} />
      <Button
        label={labelRegisterCard}
        width={300}
        height={55}
        labelWeight="400"
        colorLabel={Colors.primary}
        backgroundColor={Colors.cardBg}
        onPress={() => {}}
      />
    </Container>
  );
};
