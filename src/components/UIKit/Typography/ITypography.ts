// ITypography.ts

export interface ITypography {
  align?: 'left' | 'center' | 'right';
  color?: string;
  fontFamily?: 'PTSansCaption-Bold' | 'PTSansCaption-Regular';
  size?: number;
  labelWeight?: 'normal' | 'bold' | '400' | '500' | '600' | '700' | '800';
  children?: React.ReactNode;
  decoration?: 'none' | 'underline' | 'line-through';
  lineHeight?: number;
  onPress?: () => void;
  opacity?: number;
}
