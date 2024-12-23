import React from 'react';
import { Outlet } from 'react-router-dom';

import FooterComponent from '@components/organisms/footer/FooterComponent';
import NavbarComponent from '@components/organisms/navbar/NavbarComponent';
import SocialsBarComponent from '@components/organisms/socialsbar/SocialsbarComponent';

import LinkedinIcon from '@assets/images/icons/icon_linkedin.svg';
import ItchIoIcon from '@assets/images/icons/icon_itch.svg';
import GithubIcon from '@assets/images/icons/icon_github.svg';
import BehanceIcon from '@assets/images/icons/icon_behance.svg';
import FiverrIcon from '@assets/images/icons/icon_fiverr.svg';
import NavbarMobileComponent from '@components/organisms/navbar-mobile/NavbarMobileComponent';
import useScreenSize from '@components/utils/useScreenSize';

const navItems = [
	{ label: 'Inicio', link: '#inicio' },
	{ label: 'Sobre Mim', link: '#sobre-mim' },
	{ label: 'Projetos', link: '#projetos' },
	{ label: 'Contato', link: '#contato' }
  ];

  const socialsItem = [
	{ pathImg: BehanceIcon, label: 'Contato', link: 'https://www.behance.net/MewmewDevArt' },
	{ pathImg: FiverrIcon, label: 'Contato', link: 'https://br.fiverr.com/mewmewdevart?up_rollout=true' },
	{ pathImg: LinkedinIcon, label: 'Inicio', link: 'https://www.linkedin.com/in/mewmewdevart/' },
	{ pathImg: GithubIcon, label: 'Sobre Mim', link: 'https://github.com/mewmewdevart' },
	{ pathImg: ItchIoIcon, label: 'Projetos', link: 'https://mewmewdevart.itch.io/' }
  ];  

const Layout: React.FC = () => {
	const isSmallScreen = useScreenSize();

	return (
		<>
            {isSmallScreen ? (
                <NavbarMobileComponent navItems={navItems} />
            ) : (
                <>
                	<NavbarComponent navItems={navItems} />
                	{!isSmallScreen && <SocialsBarComponent socialsItem={socialsItem} />}
                </>
            )}
			 
				<Outlet />
			{/* <FooterComponent /> */}
		</>
	);
};

export default Layout;
