import React, { useEffect, useState } from "react";
import styles from "./HeroBox.module.scss";
import ScrollPopUp from "../../Containers/Scroll Pop Up/ScrollPopUp";

const HeroBox = () => {
  const [didScrolled, setScrolled] = useState(false);

  let isFirstRender = true;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (!isFirstRender) setScrolled(true);
      isFirstRender = false;
    });
    return window.removeEventListener("scroll", () => setScrolled(false));
  }, [didScrolled]);

  return (
    <div className={styles.herBoxContainer}>
      <div className={styles.herBox} id={"heroBox"}>
        <div className={styles.title}>
          Hello, I am <span>Aryansh Mahato</span>
        </div>
        <div className={styles.description}>Full Stack Web Developer</div>
        <ScrollPopUp didScrolled={didScrolled} />
      </div>
    </div>
  );
};

export default HeroBox;
