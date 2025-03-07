import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import HomePage from '@pages/HomePage/HomePage';
import './index.css';
import ProjectsPage from '@pages/ProjectsPage/ProjectsPage';
import AboutMePage from '@pages/AboutMePage/AboutMePage';
import ExperiencePage from '@pages/ExperiencePage/ExperiencePage';
import useScrollNavigation from './hooks/useScrollNavigation'; 
import { TranslationProvider } from './context/TranslationContext.tsx'
import CursorGlow from '@atoms/CursorGlowComponent/CursorGlowComponent.tsx';
import NavbarComponent from '@molecules/NavbarComponent/NavbarComponent.tsx';
import useResponsiveness from './hooks/useResponsiveness.ts';
import NavbarMobileComponent from '@molecules/NavbarMobileComponent/NavbarMobileComponent.tsx';
import BackToTop from '@atoms/BackToTop/BackToTop.tsx';

const App = () => {
  // useScrollNavigation();

  const isMobile = useResponsiveness();

  return (
    <>
    {isMobile ? <NavbarMobileComponent/> : <NavbarComponent /> }
      <div id="home">
        <HomePage />
      </div>
      <div id="about">
        <AboutMePage />
      </div>
      <div id="experience">
        <ExperiencePage />
      </div>
      <div id="experience">
        <ProjectsPage />
      </div>
      <BackToTop />
    </>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TranslationProvider>
    <CursorGlow />
      <App />
      </TranslationProvider>
  </StrictMode>
);