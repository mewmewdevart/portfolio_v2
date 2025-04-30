import { TranslationProvider } from "./context/TranslationContext";
import NavbarComponent from "./components/molecules/NavbarComponent";
import HomeTemplate from "./components/templates/HomeTemplate/HomeTemplate";
import AboutMeTemplate from "./components/templates/AboutMeTemplate/AboutMeTemplate";
import SocialsBarComponent from "./components/atoms/SocialsBarComponent/SocialsBarComponent";
import ExperienceTemplate from "./components/templates/ExperienceTemplate/ExperienceTemplate";

const App: React.FC = () => {
  return (
    <TranslationProvider>
      <NavbarComponent />
      <SocialsBarComponent />
      <HomeTemplate />
      <AboutMeTemplate />
      
      <ExperienceTemplate /> 
    </TranslationProvider>
  );
};

export default App;
