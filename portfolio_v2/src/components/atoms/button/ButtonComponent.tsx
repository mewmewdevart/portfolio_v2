import React from 'react';
import style from './ButtonComponent.module.css';

interface ButtonComponentProps {
  txtBtn: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ txtBtn }) => {
  return (
    <button className={style.btn_custom}>{ txtBtn }</button>
  );
};

export default ButtonComponent;