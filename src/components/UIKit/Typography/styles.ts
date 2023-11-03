// styles.ts

import styled from 'styled-components/native';
import {ITypography} from './ITypography';

export const TextCustom = styled.Text<ITypography>`
  text-align: ${({align}) => align || 'left'};
  font-size: ${({size}) => `${size || 16}px`};
  color: ${({color}) => color || 'black'};
  text-decoration: ${({decoration}) => decoration || 'none'};
  line-height: ${({lineHeight}) => `${lineHeight || 22}px`};
  opacity: ${({opacity}) => opacity || 1};
`;
