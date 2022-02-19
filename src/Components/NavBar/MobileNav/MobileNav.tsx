import React from "react";
import { FaBars } from "react-icons/fa";
import styles from "./MobileNav.module.scss";
import SocialHandles from "../../Social Handles/SocialHandles";

interface MobileNavProps {
  menuClicked: () => void;
}

const MobileNav = ({ menuClicked }: MobileNavProps) => {
  return (
    <div className={styles.mobileNav}>
      <div className={styles.hamburger} onClick={menuClicked}>
        <FaBars />
      </div>
      <SocialHandles />
    </div>
  );
};

export default MobileNav;
