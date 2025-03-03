import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import HomePage from '@pages/HomePage/HomePage';
import './index.css';
import ProjectsPage from '@pages/ProjectsPage/ProjectsPage';
import AboutMePage from '@pages/AboutMePage/AboutMePage';
import useScrollNavigation from './hooks/useScrollNavigation'; 
import { TranslationProvider } from './context/TranslationContext.tsx'

const App = () => {
  useScrollNavigation();

  return (
    <>
      <div id="home">
        <HomePage />
      </div>
      <div id="about">
        <AboutMePage />
      </div>
      <div id="projects">
        <ProjectsPage />
      </div>
    </>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TranslationProvider>
      <App />
      </TranslationProvider>
  </StrictMode>
);