import React from 'react';
import {render} from '@testing-library/react-native';
import {Card} from '@UIKit';
import {ICardProps} from '../ICardProps';

const props: ICardProps = {
  cardName: 'Visa',
  name: 'John Doe',
  cardNumber: '1234 5678 9012 3456',
  cardDate: '10/20',
  cardType: 'Black Card',
  opacity: 1,
};

test('renders Card component correctly', () => {
  const {toJSON} = render(<Card {...props} />);

  expect(toJSON()).toMatchSnapshot();
});
