import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {Normalize, Colors} from '../';
import {IWrapper} from './IWrapper';

export const Gradient: any = styled(LinearGradient).attrs({
  colors: [Colors.primary, Colors.primary],
  start: {x: 0, y: 0},
  end: {x: 0, y: 1},
})<IWrapper>`
  flex: 1;
  padding-top: ${props => Normalize(props.pt || 0)}px;
  padding-bottom: ${props => Normalize(props.pb || 0)}px;
`;

export const White = styled.View<IWrapper>`
  background: ${Colors.primaryBg};
  flex: 1;
  padding-top: ${props => Normalize(props.pt || 0)}px;
  padding-bottom: ${props => Normalize(props.pb || 0)}px;
`;

export const Transparent = styled.View<IWrapper>`
  background: transparent;
  flex: 1;
  padding-top: ${props => Normalize(props.pt || 0)}px;
  padding-bottom: ${props => Normalize(props.pb || 0)}px;
`;
