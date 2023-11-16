import React, {createContext, useState} from 'react';
import {IChildren, IWalletContext, IWalletData} from './IWalletContext';

export const WalletContext = createContext<IWalletContext>(
  {} as IWalletContext,
);

export const WalletProvider: React.FC = ({}, {children}: IChildren) => {
  const [wallet] = useState({
    wallet: {} as IWalletData,
    addCardResponse: {} as IWalletData,
    cards: [],
  });
  return (
    <WalletContext.Provider value={wallet}>{children}</WalletContext.Provider>
  );
};
