import {ReactNode} from 'react';

export interface IWalletData {
  id?: string;
  number: string;
  name: string;
  dateCard: string;
  cvv: string;
  type: string;
}

export interface IWalletContext {
  wallet: IWalletData;
  addCardResponse: IWalletData[];
}

export interface IChildren {
  children: ReactNode;
}
