import React from 'react';
import style from './ButtonComponent.module.css';

interface ButtonComponentProps {
  children: React.ReactNode;
  className?: string; 
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ children, className}) => {
  return (
    <button className={`${style.btn_custom} ${className}`}>{ children }</button>
  );
};

export default ButtonComponent;