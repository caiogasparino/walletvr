import React, {useState} from 'react';
import {Images} from '@assets/images';
import {CamContain, Container, InputCard, TypographyContain} from './styles';
import {Divider, Typography, Colors} from '@UIKit';
import {ICreditCardInputProps} from './ICreditCardInputProps';

const Cam = Images.icons.cam;

export const CreditCardInput: React.FC<ICreditCardInputProps> = ({
  testID = 'credit-card-input',
  label = 'número do cartão',
  onChangeText = () => {},
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
      <TypographyContain data-testid={`${testID}-label`}>
        <Typography size={14} lineHeight={22} color={Colors.primaryGrey}>
          {label}
        </Typography>
      </TypographyContain>
      <Divider paddingBottom={5} />
      <Container data-testid={testID}>
        <CamContain>
          <Cam width={28} height={28} data-testid={`${testID}-cam`} />
        </CamContain>
        <InputCard
          maxLength={19}
          value={creditCardNumber}
          onChangeText={handleCreditCardChange}
          keyboardType="numeric"
          data-testid={`${testID}-input`}
        />
      </Container>
    </React.Fragment>
  );
};
