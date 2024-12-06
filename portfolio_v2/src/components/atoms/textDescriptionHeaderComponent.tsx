import React from 'react';

interface TextDescriptionHeaderComponentProps {
  children: React.ReactNode;
  className?: string; 
}

const TextDescriptionHeaderComponent: React.FC<TextDescriptionHeaderComponentProps> = ({ children, className }) => {
  return (
    <p className={`${className}`}>{children}</p> 
  );
};

export default TextDescriptionHeaderComponent;
