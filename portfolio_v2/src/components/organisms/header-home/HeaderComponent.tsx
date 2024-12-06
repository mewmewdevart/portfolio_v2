import ButtonComponent from "@components/atoms/button/ButtonComponent";
import StatusBarComponent from "@components/atoms/statusBarComponent";
import TextHeaderComponent from "@components/atoms/textDescriptionHeaderComponent";
import TitleHeaderComponent from "@components/atoms/titleHeaderComponent";

import style from "./HeaderComponent.module.css";
import useScreenSize from "@components/utils/useScreenSize";

interface HeaderHomeProps {
  textTitle: React.ReactNode;
  textDescription: string;
  textStatus: string;
  textButton: string;
  imgPath: string;
  styleButton?: string;
  styleTitle?: string;
  styleDescription?: string;
}

const HeaderHomeComponent: React.FC<HeaderHomeProps> = ({
  textTitle,
  styleTitle,
  textDescription,
  styleDescription,
  textStatus,
  imgPath,
  textButton,
  styleButton,
}) => {
  const isSmallScreen = useScreenSize();

  return (
    <header
      className={style.header}
      style={{
        backgroundImage: `url(${imgPath})`,
        backgroundSize: isSmallScreen ? "70%" : "37%",
        backgroundPosition: isSmallScreen ? "center 20%" : "center 30%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={style.header_content}>
        <TitleHeaderComponent className={styleTitle}>
          {textTitle}
        </TitleHeaderComponent>
        <TextHeaderComponent className={styleDescription}>
          {textDescription}
        </TextHeaderComponent>
        <ButtonComponent className={styleButton}>{textButton}</ButtonComponent>
      </div>
      {!isSmallScreen && (
        <StatusBarComponent
          className="border-2 border-brandPrimary bg-brandBackground px-2 py-1"
          status={textStatus}
        />
      )}
    </header>
  );
};

export default HeaderHomeComponent;
