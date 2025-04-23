import * as React from "react";

interface TooltipComponentProps {
  description: string;
  children: React.ReactNode;
}

const TooltipComponent: React.FC<TooltipComponentProps> = ({ description, children }) => {
  return (
    <div className="relative group">
      {children}
      <div className="absolute bottom-full mb-2 hidden group-hover:block bg-purple-500 text-dark text-xs py-4 px-4 w-fit lg:w-max">
        {description}
      </div>
    </div>
  );
};

export default TooltipComponent;
