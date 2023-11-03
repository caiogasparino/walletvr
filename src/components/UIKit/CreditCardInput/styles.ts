import styled from 'styled-components/native';
import {Colors} from '@UIKit';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background: ${Colors.primaryWhite};
  height: 45px;
  padding-horizontal: 12px;
  border-radius: 5px;
`;

export const TypographyContain = styled.View`
  display: flex;
  width: 100%;
  align-items: flex-start;
`;

export const CamContain = styled.TouchableOpacity`
  display: flex;
  align-items: flex-start;
`;

export const InputCard = styled.TextInput`
  flex: 1;
  margin-left: 10px;
  font-size: 16px;
  color: ${Colors.primaryBlack};
  font-family: 'PTSansCaption-Regular';
`;
