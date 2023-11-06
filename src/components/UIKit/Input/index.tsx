import React, {useState} from 'react';
import {Container, InputContain, InputText, TypographyContain} from './styles';
import {Divider, Typography, Colors} from '@UIKit';
import {IInputProps} from './IInput';

export const Input: React.FC<IInputProps> = ({
  label,
  keyboardType,
  onChangeText = () => {},
  inputType,
  placeholder,
  secureTextEntry,
  autoCapitalize,
  autoCorrect,
  maxLength,
  style,
  styleContainer = {
    width: '100%',
  },
}) => {
  const [inputText, setInputText] = useState('');
  const handleChange = (value: string) => {
    switch (inputType) {
      case 'default':
        setInputText(value);
        onChangeText(value);
        break;
      case 'datecard':
        const numericValue = value.replace(/\D/g, '');
        const sanitizedValue = numericValue.slice(0, 4);
        const maskedDate = sanitizedValue.replace(/(\d{2})(\d{0,2})/, '$1/$2');
        setInputText(maskedDate);
        onChangeText(maskedDate);
        break;
      case 'codecard':
        setInputText(value);
        onChangeText(value);
        break;
      default:
        break;
    }
  };

  return (
    <Container style={styleContainer}>
      <TypographyContain>
        <Typography size={14} lineHeight={22} color={Colors.primaryGrey}>
          {label}
        </Typography>
      </TypographyContain>
      <Divider paddingBottom={5} />
      <InputContain>
        <InputText
          value={inputText}
          style={style}
          onChangeText={handleChange}
          keyboardType={keyboardType}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          maxLength={maxLength}
        />
      </InputContain>
    </Container>
  );
};
