import styled from 'styled-components/native';
import {CustomDividerProps} from './IDivider';

export const DividerContainer = styled.View<CustomDividerProps>`
  padding-bottom: ${({paddingBottom}) => `${paddingBottom || 0}px`};
  border-color: ${({borderColor}) => borderColor || 'transparent'};
  border-bottom-width: ${({borderBottomWidth}) =>
    `${borderBottomWidth || 0}px`};
`;
