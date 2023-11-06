import styled from 'styled-components/native';
import {CustomDividerProps} from './IDivider';

export const DividerContainer = styled.View<CustomDividerProps>`
  padding-bottom: ${({paddingBottom}) => `${paddingBottom || 0}px`};
  border-color: ${({borderColor}) => borderColor || 'transparent'};
  border-bottom-width: ${({borderBottomWidth}) =>
    `${borderBottomWidth || 0}px`};
`;

export const DividerContainerShadow = styled.View<CustomDividerProps>`
  padding-bottom: ${({paddingBottom}) => `${paddingBottom || 0}px`};
  border-color: ${({borderColor}) => borderColor || 'transparent'};
  border-bottom-width: ${({borderBottomWidth}) =>
    `${borderBottomWidth || 0}px`};
  elevation: ${({elevation}) => `${elevation || 0}`};
  shadow-color: ${({shadowColor}) => shadowColor || 'transparent'};
  shadow-opacity: ${({shadowOpacity}) => shadowOpacity || 0};
  shadow-radius: ${({shadowRadius}) => `${shadowRadius || 0}px`};
  shadow-offset: ${({shadowOffset}) =>
    shadowOffset
      ? `${shadowOffset.width || 0}px ${shadowOffset.height || 0}px`
      : '0px 0px'};
`;
