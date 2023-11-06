import styled from 'styled-components/native';
import {Colors} from '@UIKit';

const commonHeaderStyles = `
  background-color: ${Colors.primaryWhite};
  z-index: 1;
  width: 100%;
`;

export const Container = styled.View`
  ${commonHeaderStyles}
  height: 110px;
  position: absolute;
  top: 0;
  padding-horizontal: 8%;
  padding-top: 10%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerHeaderTitle = styled.View`
  ${commonHeaderStyles}
  height: 70px;
  top: 110px;
  position: absolute;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  shadow-color: ${Colors.shadowColor};
  shadow-opacity: 0.8;
  shadow-radius: 10px;
  shadow-offset: 0px 4px;
  elevation: 5;
`;

export const ButtonArrow = styled.TouchableOpacity``;
