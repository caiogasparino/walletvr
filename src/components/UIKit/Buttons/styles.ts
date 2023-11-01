import {TouchableOpacity, Text} from 'react-native';
import styled from 'styled-components/native';

export const ButtonContainer = styled(TouchableOpacity)<{
  backgroundColor?: string;
}>`
  background-color: ${props => props.backgroundColor || '#007AFF'};
  padding: 10px 20px;
  border-radius: 5px;
`;

export const ButtonText = styled(Text)<{color?: string}>`
  color: ${props => props.color || '#fff'};
  font-size: 16px;
  text-align: center;
`;
