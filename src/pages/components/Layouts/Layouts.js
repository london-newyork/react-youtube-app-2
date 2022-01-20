import React from 'react';
import { Header } from '../Header/Header';

export const Layouts = ({ children }) => {
  return (
  <div>
      <Header />
      {children}
  </div>
  )
};
