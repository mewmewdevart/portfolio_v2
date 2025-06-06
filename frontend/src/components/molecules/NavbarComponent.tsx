
import NavbarClient from "./NavbarClient";
import ToolBarAccessible from "./ToolBarAccessible";
import LogoMewMewDevart from "../../assets/logo.svg";

const NavbarComponent: React.FC = () => {
  return (
    <div className="flex flex-col fixed w-full bg-dark z-50">
      <header className="bg-dark flex flex-col lg:flex-row justify-between w-full mx-auto items-center py-2 px-4 lg:px-40 transition-all duration-200 ease-in-out">
        <a className="flex items-center text-primary gap-2 font-bold focus-visible:outline-none focus-visible:px-2 focus-visible:py-1
          focus-visible:border-primary focus-visible:border-4 focus-visible:border-dashed" href="/">
          <img src={LogoMewMewDevart} alt="Logo" className="w-[1.875rem] h-[1.875rem]" />
          <h1>MewMewDev</h1>
        </a>
        <nav>
          <NavbarClient />
        </nav>
      </header>
      <ToolBarAccessible />
    </div>
  );
};

export default NavbarComponent;