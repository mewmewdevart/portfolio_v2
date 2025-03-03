import React from "react";

import GithubIcon from "../assets/icons/icon_github.svg";
import BehanceIcon from "../assets/icons/icon_behance.svg";
import FiverrIcon from "../assets/icons/icon_fiverr.svg";

interface SocialsBarComponentProps {
  iconPath?: string;
  iconLabel?: string;
  iconLink?: string;
}

const SocialsBarComponent: React.FC<SocialsBarComponentProps> = ({}) => {
  return (
    <>
      <aside className="flex flex-col absolute items-center bottom-0">
        <ul className="text-white w-fit mx-20 flex items-center flex-col gap-[10px] mb-2">
          <li>
            <a
              href="https://github.com/mewmewdevart"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GithubIcon} alt="GitHub" className="w-[32px]" />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/mewmewdevart"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={BehanceIcon} alt="LinkedIn" className="w-[32px]" />
            </a>
          </li>
          <li>
            <a
              href="https://fiverr.com/mewmewdevart"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={FiverrIcon} alt="Fiverr" className="w-[32px]" />
            </a>
          </li>
        </ul>
        <div
          aria-hidden="true"
          className="border-r border-gray h-[100px] mx-4 w-[5px]"
        ></div>
      </aside>
    </>
  );
};

export default SocialsBarComponent;
