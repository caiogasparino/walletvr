import styled from 'styled-components/native';
import {Colors} from '@UIKit';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.primary};
  justify-content: center;
  padding-horizontal: 35px;
  align-items: center;
`;

export const InputContain = styled.View`
  background-color: ${Colors.primary};
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InputContainLeft = styled.View`
  width: 45%;
`;

export const InputContainRight = styled.View`
  width: 45%;
`;
