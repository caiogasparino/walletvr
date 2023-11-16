// Button.test.tsx

import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import renderer from 'react-test-renderer';
import {Button} from '@UIKit';
import {ButtonContainer} from '../styles';

describe('Button Component', () => {
  test('renders with the correct label', () => {
    const {getByText} = render(<Button label="Click me" />);
    expect(getByText('Click me')).toBeDefined();

    const tree = renderer.create(<Button label="Click me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('calls onPress prop when clicked', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <Button label="Click me" onPress={onPressMock} />,
    );

    fireEvent.press(getByText('Click me'));

    expect(onPressMock).toHaveBeenCalledTimes(1);

    const tree = renderer
      .create(<Button label="Click me" onPress={onPressMock} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders with disabled attribute when disabled is true', () => {
    const {getByTestId} = render(
      <ButtonContainer testID="myButton">
        <Button label="Click me" disabled={true} />
      </ButtonContainer>,
    );

    const button = getByTestId('myButton');
    const innerButton = button.children[0];
    expect(innerButton).toHaveProp('disabled', true);

    const tree = renderer
      .create(<Button label="Click me" testID="myButton" disabled={true} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
