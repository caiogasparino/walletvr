import styled from 'styled-components/native';
import {Colors} from '@UIKit';
import {StyleSheet} from 'react-native';

interface IStyledProps {
  paddingTop?: number;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.primary};
  justify-content: center;
  align-items: center;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    height: '100%',
    marginVertical: 35,
  },
  showsVerticalScrollIndicator: false,
})<IStyledProps>`
  flex: 1;
  background-color: ${Colors.primary};
`;

export const Contain = styled.View`
  display: flex;
  background-color: ${Colors.primary};
  justify-content: center;
  align-items: center;
`;

export const CardContain = styled.TouchableOpacity`
  align-items: center;
  justify-content: space-between;
`;

export const ButtonContain = styled.View`
  align-items: center;
  justify-content: space-between;
  margin-top: 20%;
`;

export const position = StyleSheet.create({
  animate: {
    position: 'absolute',
  },
});
