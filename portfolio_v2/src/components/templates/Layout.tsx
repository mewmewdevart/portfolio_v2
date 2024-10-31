import React from 'react';
import { Outlet } from 'react-router-dom';

import FooterComponent from '../organisms/footer/FooterComponent';
import NavbarComponent from '../organisms/navbar/NavbarComponent';
import SocialsBarComponent from '../organisms/socialsbar/SocialsbarComponent';

import LinkedinIcon from '../../assets/images/icons/icon_linkedin.svg';
import GithubIcon from '../../assets/images/icons/icon_github.svg';
import BehanceIcon from '../../assets/images/icons/icon_behance.svg';
import FiverrIcon from '../../assets/images/icons/icon_fiverr.svg';

const navItems = [
	{ label: 'Inicio', link: '#inicio' },
	{ label: 'Sobre Mim', link: '#sobre-mim' },
	{ label: 'Projetos', link: '#projetos' },
	{ label: 'Contato', link: '#contato' }
  ];

const socialsItem = [
	{ pathImg: LinkedinIcon , label: 'Inicio', link: '#inicio' },
	{ pathImg: GithubIcon , label: 'Sobre Mim', link: '#sobre-mim' },
	{ pathImg: BehanceIcon , label: 'Projetos', link: '#projetos' },
	{ pathImg: FiverrIcon , label: 'Contato', link: '#contato' }
  ];

const Layout: React.FC = () => {

	return (
		<>
			 <NavbarComponent navItems={navItems} />
			 <SocialsBarComponent socialsItem={socialsItem} />
				<Outlet />
			{/* <FooterComponent /> */}
		</>
	);
};

export default Layout;
