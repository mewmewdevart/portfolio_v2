import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faBehance,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const SocialsBarComponent = () => {
  return (
    <aside
      className="fixed bottom-0 hidden lg:flex flex-col items-center "
      aria-label="Redes sociais"
    >
      <ul className="text-neutral-500 w-fit mx-20 flex flex-col items-center">
        <li className="hover:text-primary transition-colors duration-300 flex items-center justify-center w-10 h-10">
          <a
            href="https://github.com/mewmewdevart"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-xl hover:transform hover:scale-150 transition-transform duration-300
            focus-visible:outline-none
          focus-visible:border-primary focus-visible:border-4 focus-visible:border-dashed focus-visible:rounded-full  px-2 py-1"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li className="hover:text-primary transition-colors duration-300  flex items-center justify-center w-10 h-10">
          <a
            href="https://linkedin.com/in/mewmewdevart"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-xl hover:transform hover:scale-150 transition-transform duration-300
        focus-visible:outline-none
          focus-visible:border-primary focus-visible:border-4 focus-visible:border-dashed focus-visible:rounded-full px-2 py-1"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className="hover:text-primary transition-colors duration-300  flex items-center justify-center w-10 h-10">
          <a
            href="https://www.behance.net/mewmewdevart"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance"
            className="text-xl hover:transform hover:scale-150 transition-transform duration-300
        focus-visible:outline-none
          focus-visible:border-primary focus-visible:border-4 focus-visible:border-dashed focus-visible:rounded-full  px-2 py-1"
          >
            <FontAwesomeIcon icon={faBehance} />
          </a>
        </li>
        <li className="hover:text-primary transition-colors duration-300  flex items-center justify-center w-10 h-10">
          <a
            href="https://codepen.io/mewmewdevart"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CodePen"
            className="text-xl hover:transform hover:scale-150 transition-transform duration-300
        focus-visible:outline-none
          focus-visible:border-primary focus-visible:border-4 focus-visible:border-dashed focus-visible:rounded-full  px-2 py-1"
          >
            <FontAwesomeIcon icon={faCodepen} />
          </a>
        </li>
        <li className="hover:text-primary transition-colors duration-300  flex items-center justify-center w-10 h-10">
          <a
            href="https://fiverr.com/mewmewdevart"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fiverr"
            className="text-xl hover:transform hover:scale-150 transition-transform duration-300r focus-visible:outline-none
          focus-visible:border-primary focus-visible:border-4 focus-visible:border-dashed focus-visible:rounded-full  px-2 py-1"
          >
            <FontAwesomeIcon icon={faLink} />
          </a>
        </li>
      </ul>
      <div
        role="presentation"
        className="border-r border-neutral-500 h-[6.25rem] mx-4 w-[0.3125rem]"
      ></div>
    </aside>
  );
};

export default SocialsBarComponent;