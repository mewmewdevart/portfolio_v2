import React from "react";
// import style from "./ButtonComponent.module.css"; // Se você tiver estilos específicos para o disabled aqui

interface ButtonComponentProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    [x: string]: any;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
    children,
    className,
    onClick,
    disabled = false, 
    ...props 
}) => {
    const baseClasses = "overflow-hidden relative border-2 border-primary p-[0.375rem] transition-colors duration-150 ease-in-out";
    const enabledClasses = "hover:bg-primary hover:text-dark cursor-pointer bg-dark text-white";
    const disabledClasses = " cursor-not-allowed opacity-20";

    return (
        <button
            className={`
                ${baseClasses}
                ${disabled ? disabledClasses : enabledClasses}
                ${className}
            `}
            onClick={!disabled ? onClick : undefined} 
            disabled={disabled}
            aria-disabled={disabled}
            {...props} 
        >
            {children}
        </button>
    );
};

export default ButtonComponent;