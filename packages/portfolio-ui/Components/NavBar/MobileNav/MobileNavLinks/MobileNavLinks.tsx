import React from "react";
import { FaTimes } from "react-icons/fa";

import styles from "./MobileNavLinks.module.scss";
import { NavItemType } from "../../../../Utils/enums";
import NavLinks from "../../NavLinks/NavLinks";

interface NavItems {
  name: string;
  type: NavItemType;
}

interface MobileNavLinksProps {
  show: boolean;
  closeButtonClicked: () => void;
}

const MobileNavLinks = ({ show, closeButtonClicked }: MobileNavLinksProps) => {
  const NavItems: Array<NavItems> = [
    { name: "Skills", type: NavItemType.normal },
    { name: "Projects", type: NavItemType.normal },
    { name: "Resume", type: NavItemType.normal },
    { name: "Say Hello", type: NavItemType.cta },
  ];

  const classes = () => {
    if (show) {
      return styles.mobileNavLinks + " " + styles.show;
    }
    return styles.mobileNavLinks;
  };

  return (
    <div className={classes()}>
      <ul className={styles.navLinks} onClick={closeButtonClicked}>
        <NavLinks NavItems={NavItems} />
      </ul>
      <div className={styles.closeButton} onClick={closeButtonClicked}>
        <FaTimes />
      </div>
    </div>
  );
};

export default MobileNavLinks;
