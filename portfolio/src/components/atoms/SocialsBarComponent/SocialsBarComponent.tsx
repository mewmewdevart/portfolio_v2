import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faBehance, faCodepen } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const SocialsBarComponent = () => {
  return (
    <aside
      className="fixed bottom-0 hidden xl:flex flex-col items-center "
      aria-label="Redes sociais"
    >
      <ul className="text-gray w-fit mx-20 flex flex-col items-center gap-2">
        <li className="hover:text-primary transition-colors duration-300">
          <a
            href="https://github.com/mewmewdevart"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-regular"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li className="hover:text-primary transition-colors duration-300">
          <a
            href="https://linkedin.com/in/mewmewdevart"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-regular"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className="hover:text-primary transition-colors duration-300">
          <a
            href="https://fiverr.com/mewmewdevart"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fiverr"
            className="text-regular"
          >
            <FontAwesomeIcon icon={faLink} />
          </a>
        </li>
        <li className="hover:text-primary transition-colors duration-300">
          <a
            href="https://www.behance.net/mewmewdevart"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance"
            className="text-regular"
          >
            <FontAwesomeIcon icon={faBehance} />
          </a>
        </li>
        <li className="hover:text-primary transition-colors duration-300">
          <a
            href="https://codepen.io/mewmewdevart"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CodePen"
            className="text-regular"
          >
            <FontAwesomeIcon icon={faCodepen} />
          </a>
        </li>
      </ul>
      <div
        role="presentation"
        className="border-r border-gray h-[100px] mx-4 w-[5px]"
      ></div>
    </aside>
  );
};

export default SocialsBarComponent;
