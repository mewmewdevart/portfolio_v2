import React from "react";

import MePhoto from "@assets/images/image.webp";
import style from "./SectionAboutMeComponent.module.css";

const SectionAboutMeComponent: React.FC = () => {
  return (
    <section className={style.section}>
      <div className="flex ">
        <div className="w-full ">
          <h2>Ola</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            porta vitae leo vel imperdiet. Proin molestie eros quis dolor porta
            vestibulum. Nulla nec leo pulvinar, viverra purus non, hendrerit neque.
            Donec cursus, nisl sed commodo pulvinar, est massa hendrerit orci, ac
            dignissim erat massa id nunc. Fusce vitae pellentesque mauris, et
            convallis sem. Nulla suscipit dolor sit amet semper viverra. Nam sed
            dolor nunc.
          </p>
        </div>
        <div className="w-full sm:w-1/2 flex justify-end h-[480px]">
          <img src={MePhoto} alt="Photo of me" />
        </div>
      </div>
    </section>
  );
};

export default SectionAboutMeComponent;
