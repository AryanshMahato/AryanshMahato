import React from "react";

import styles from "./DesktopNav.module.scss";

import { NavItemType } from "../../../Utils/enums";
import NavLinks from "../NavLinks/NavLinks";
import SocialHandles from "../../Social Handles/SocialHandles";

interface NavItems {
  name: string;
  type: NavItemType;
}

const DesktopNav = () => {
  const NavItems: Array<NavItems> = [
    { name: "Skills", type: NavItemType.normal },
    { name: "Projects", type: NavItemType.normal },
    { name: "Resume", type: NavItemType.normal },
    { name: "Say Hello", type: NavItemType.cta }
  ];
  return (
    <ul className={styles.desktopNav}>
      <SocialHandles />
      <NavLinks NavItems={NavItems} />
    </ul>
  );
};

export default DesktopNav;
