import styled from 'styled-components/native';
import {Colors} from '../../../components/UIKit';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.primary};
  justify-content: center;
  align-items: center;
`;

export const BackgroundImage = styled.Image`
  flex: 1;
  resizemode: contain;
  width: 100%;
  height: 100%;
`;
