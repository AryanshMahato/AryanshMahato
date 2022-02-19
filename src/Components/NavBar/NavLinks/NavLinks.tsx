import React from "react";
import styles from "./NavLinks.module.scss";
import { NavItemType } from "../../../Utils/enums";

interface NavItems {
  name: string;
  type: NavItemType;
}

interface NavLinksProps {
  NavItems: Array<NavItems>;
}

const NavLinks = ({ NavItems }: NavLinksProps) => {
  const showNavLinks = () => {
    return NavItems.map((NavItem) => {
      if (NavItem.type === NavItemType.normal) {
        return (
          <li className={styles.navLink} key={NavItem.name}>
            {NavItem.name.toLocaleLowerCase() !== "resume" ? (
              <a href={`#${NavItem.name.toLocaleLowerCase()}`}>
                {NavItem.name}
              </a>
            ) : (
              <a
                href="https://drive.google.com/open?id=1vBnC29jioC84eB98ab5qHvwsr45FazZm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {NavItem.name}
              </a>
            )}
          </li>
        );
      }
      return (
        <a href={"#hello"} className={styles.cta} key={NavItem.name}>
          {NavItem.name}
        </a>
      );
    });
  };

  return <div className={styles.navLinks}>{showNavLinks()}</div>;
};

export default NavLinks;
