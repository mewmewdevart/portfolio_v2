import LogoImage from "../../../assets/logo.svg";
import { TranslationContext } from "../../../context/TranslationContext";
import { useContext } from "react";
import "./style.css";

interface NavItem {
	id: string;
	label: string;
}

const NavbarMobileComponent: React.FC = () => {
  const { texts } = useContext(TranslationContext)!;

  const navItems: NavItem[] = [
		{ id: "sobre", label: texts.about },
		{ id: "experience", label: texts.experience },
		{ id: "projetos", label: texts.projects },
		{ id: "contato", label: texts.contact },
	];

  return (
    <header className="bg-dark flex justify-between items-center w-[90%] sm:w-[80%] mx-auto items-center py-4 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center text-primary gap-2 font-bold">
        <img
          src={LogoImage}
          alt="Logo da MewMewDev"
          className="w-[1.875rem] h-[1.875rem]"
        />
        <h1>MewMewDev</h1>
      </div>

      <div>
        <input type="checkbox" id="active" />
        <label htmlFor="active" className="menu-btn">
          <span></span>
        </label>
        <label htmlFor="active" className="close"></label>
        <div className="wrapper">
          <ul>
          {navItems.map((item: NavItem) => (
						<li key={item.id} className="text-small hover:text-primary">
							<a href={`#${item.id}`}>
								<span className="text-primary"># </span>
								{item.label}
							</a>
						</li>
					))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavbarMobileComponent;
