import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Container = styled.View`
  position: absolute;
  width: 65%;
  top: ${Platform.OS === 'ios' ? '50px' : '20px'};
  left: 0px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonArrow = styled.TouchableOpacity``;
