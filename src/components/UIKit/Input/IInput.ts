import {StyleProp, TextStyle} from 'react-native';

export interface IInputProps {
  label?: string;
  keyboardType?: 'default' | 'numeric';
  placeholder?: string;
  secureTextEntry?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoCorrect?: boolean;
  maxLength?: number;
  style?: StyleProp<TextStyle>;
  styleContainer?: StyleProp<TextStyle>;
  inputType?: 'default' | 'datecard' | 'codecard';
}
