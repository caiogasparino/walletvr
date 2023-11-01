import {ReactNode} from 'react';

export interface IWrapper {
  color?: 'gradient' | 'white' | 'transparent' | 'image';
  children: ReactNode;
  statusBarColor?: string;
  paddingTop?: number;
  paddingBottom?: number;
  StatusBarHide?: boolean;
  pt?: number;
  pb?: number;
}
