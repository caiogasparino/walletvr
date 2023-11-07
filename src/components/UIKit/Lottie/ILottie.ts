import {AnimationObject} from 'lottie-react-native';

export interface ILottie {
  source: string | AnimationObject | {uri: string} | any;
  autoPlay?: boolean;
  loop?: boolean;
  width?: number;
  height?: number;
}
