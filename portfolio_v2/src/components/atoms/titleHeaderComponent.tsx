import React from 'react';

interface TitleHeaderComponentProps {
  children: React.ReactNode;
  className?: string;
}

const TitleHeaderComponent: React.FC<TitleHeaderComponentProps> = ({ children, className }) => {
  return (
    <h1 className={`text-[32px] ${className}`}>{children}</h1>
  );
};

export default TitleHeaderComponent;
