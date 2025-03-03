import React from "react";
import style from "./ButtonComponent.module.css";

interface ButtonComponentProps {
	children: React.ReactNode;
	className?: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
	children,
	className,
}) => {
	return (
		<button
			className={`overflow-hidden relative border-2 border-primary p-[6px] hover:bg-primary hover:text-dark cursor-pointer bg-dark ${className}`}
		>
			{children}
		</button>
	);
};

export default ButtonComponent;
