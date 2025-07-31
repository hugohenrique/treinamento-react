import React from 'react';
import style from './style.module.css';

export default function Card({ children }) {
  return (<div className={style.cardGrid}>{children}</div>);
};