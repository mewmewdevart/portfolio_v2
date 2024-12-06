import React from 'react';

interface StatusBarComponentProps {
  status: string;
  className?: string; 
}

const StatusBarComponent: React.FC<StatusBarComponentProps> = ({ status, className }) => {
    return (
      <div>
        <p className={`flex border-2 border-brandPrimary bg-brandBackground text-center lg:text-left items-center ${className}`}>
          <span className="min-w-3 min-h-3 bg-brandPrimary block mr-2 "></span>
          {status}
        </p>
      </div>
    );
  }

export default StatusBarComponent;
