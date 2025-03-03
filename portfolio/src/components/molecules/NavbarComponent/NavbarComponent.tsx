import { useState, useContext } from "react";
import LogoImage from "../../../assets/logo.svg";
import { TranslationContext } from "../../../context/TranslationContext";

interface NavItem {
	id: string;
	label: string;
}

const NavbarComponent: React.FC = () => {
	const { texts, setLanguage } = useContext(TranslationContext)!;
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	
	const navItems: NavItem[] = [
		{ id: "inicio", label: texts.home },
		{ id: "sobre", label: texts.about },
		{ id: "projetos", label: texts.projects },
		{ id: "contato", label: texts.contact },
	];

	return (
		<header className="bg-dark flex justify-between w-[80%] mx-auto items-center py-4 fixed top-0 left-0 right-0 z-50">
			<div className="flex items-center text-primary gap-2 font-bold">
				<img
					src={LogoImage}
					alt="Logo da MewMewDev"
					className="w-[30px] h-[30px]"
				/>
				<h1>MewMewDev</h1>
			</div>
			<nav>
				<ul className="flex justify-center gap-6 text-white">
					{navItems.map((item: NavItem) => (
						<li key={item.id} className="hover:text-primary">
							<a href={`#${item.id}`}>
								<span className="text-primary"># </span>
								{item.label}
							</a>
						</li>
					))}
					<li className="relative">
						<button
							onClick={() => setIsDropdownOpen(!isDropdownOpen)}
							aria-haspopup="true"
							aria-expanded={isDropdownOpen}
							className="hover:underline cursor-pointer text-primary"
						>
							{texts.language} <span aria-hidden="true">↓</span>
						</button>
						{isDropdownOpen && (
							<ul
								className="absolute bg-dark border mt-2 shadow-lg w-[100px] right-0"
								role="menu"
							>
								<li role="menuitem">
									<button
										onClick={() => setLanguage("pt-BR")}
										className="block w-full text-left cursor-pointer hover:bg-primary p-2"
									>
										🇧🇷 pt-BR
									</button>
								</li>
								<li role="menuitem">
									<button
										onClick={() => setLanguage("en-US")}
										className="block w-full text-left cursor-pointer hover:bg-primary p-2"
									>
										🇺🇸 En-US
									</button>
								</li>
							</ul>
						)}
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default NavbarComponent;
