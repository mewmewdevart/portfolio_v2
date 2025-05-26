import React from "react";
// import style from "./ButtonComponent.module.css";

interface ButtonComponentProps {
	children: React.ReactNode;
	className?: string;
	onClick?: () => void; // Adicionado
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
	children,
	className,
	onClick, // Adicionado
}) => {
	return (
		<button
			className={`overflow-hidden relative border-2 border-primary p-[0.375rem] hover:bg-primary hover:text-dark cursor-pointer bg-dark ${className}`}
			onClick={onClick} // Adicionado
		>
			{children}
		</button>
	);
};

export default ButtonComponent;