import React from 'react';
import { Header } from '../Header/Header';
import Style from './Layouts.module.css'

export const Layouts = ({ children }) => {
  return (
  <div className={Style.wrapper}>
      <Header />
      <div className={Style.main}>
      {children}
      </div>
  </div>
  )
};
