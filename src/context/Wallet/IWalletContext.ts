import {ReactNode} from 'react';

export interface IWalletData {
  id: number;
  idCard?: string;
  number: string;
  name: string;
  dateCard: string;
  cvv: string;
  type: string;
}

export interface IWalletContext {
  wallet: IWalletData;
  addCardResponse: IWalletData;
  cards: IWalletData[];
}

export interface IChildren {
  children: ReactNode;
}
