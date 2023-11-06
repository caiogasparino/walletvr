import {Images} from '@assets/images';
import React, {useState} from 'react';
import {CamContain, Container, InputCard, TypographyContain} from './styles';
import {Divider, Typography, Colors} from '@UIKit';

const Cam = Images.icons.cam;
const LabelCard = 'número do cartão';
interface ICreditCardInputProps {
  onChangeText: (value: string) => void;
}

export const CreditCardInput: React.FC<ICreditCardInputProps> = ({
  onChangeText,
}) => {
  const [creditCardNumber, setCreditCardNumber] = useState('');

  const handleCreditCardChange = (value: string) => {
    const cleanValue = value.replace(/[^0-9]/g, '');
    const maskedValue = cleanValue.replace(/(\d{4})/g, '$1 ').trim();

    setCreditCardNumber(maskedValue);
    onChangeText(maskedValue);
  };

  return (
    <React.Fragment>
      <TypographyContain>
        <Typography size={14} lineHeight={22} color={Colors.primaryGrey}>
          {LabelCard}
        </Typography>
      </TypographyContain>
      <Divider paddingBottom={5} />
      <Container>
        <CamContain>
          <Cam width={28} height={28} />
        </CamContain>
        <InputCard
          maxLength={19}
          value={creditCardNumber}
          onChangeText={handleCreditCardChange}
          keyboardType="numeric"
        />
      </Container>
    </React.Fragment>
  );
};
