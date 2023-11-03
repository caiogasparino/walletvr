import {TouchableOpacity, Text} from 'react-native';
import styled from 'styled-components/native';
import {IButtonProps} from './IButtons';

export const ButtonContainer = styled(TouchableOpacity)<IButtonProps>`
  background-color: ${props => props.backgroundColor || '#007AFF'};
  justify-content: center;
  border-radius: ${props => props.borderRadius || 5}px;
  padding-vertical: ${props => props.paddingVertical || 10}px;
  padding-horizontal: ${props => props.paddingHorizontal || 20}px;
`;

export const ButtonText = styled(Text)<{color?: string}>`
  color: ${props => props.color || '#fff'};
  font-size: 16px;
  text-align: center;
`;
