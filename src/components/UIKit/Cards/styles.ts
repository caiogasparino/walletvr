import styled from 'styled-components/native';
import {ICardProps} from './ICardProps';
import {Colors} from '@UIKit';

export const CardContainer = styled.View<ICardProps>`
  background-color: ${props =>
    props.cardType === 'Black Card' ? Colors.primaryBlack : Colors.cardBg};
  border-radius: 16px;
  padding: 10px;
  gap: 10px;
  width: 300px;
  height: 180px;
  margin: 16px;
  opacity: ${props => props.opacity || 1};
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
`;

export const Contain = styled.View`
  display: flex;
  width: 100%;
  padding-top: 10px;
  align-items: flex-start;
`;
export const TitleContain = styled.View`
  display: flex;
  width: 100%;
  padding: 10px;

  align-items: flex-start;
`;
export const TextContain = styled.View`
  display: flex;
  width: 100%;
  padding: 10px;
  gap: 1px;
  align-items: flex-start;
`;
