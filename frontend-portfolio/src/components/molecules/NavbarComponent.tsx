import Image from "next/image";
import NavbarClient from "./NavbarClient";
import ToolBarAccessible from "./ToolBarAccessible";

const NavbarComponent: React.FC = () => {
  return (
    <div className="flex flex-col fixed w-full bg-dark z-50">
      <header className="bg-dark flex flex-col lg:flex-row justify-between w-full mx-auto items-center py-2 px-4 md:px-40 ">
        <div className="flex items-center text-primary gap-2 font-bold">
          <Image
            src="/logo.svg"
            alt="Logo da MewMewDev"
            width={30}
            height={30}
            className="w-[1.875rem] h-[1.875rem]"
          />
          <h1>MewMewDev</h1>
        </div>
        <nav>
          <NavbarClient />
        </nav>
      </header>
      <ToolBarAccessible />
    </div>
  );
};

export default NavbarComponent;