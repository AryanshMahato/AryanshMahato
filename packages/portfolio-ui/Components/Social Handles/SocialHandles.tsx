import React from "react";
import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagram,
} from "react-icons/fa";

import styles from "./SocialHandles.module.scss";
import { SocialHandle } from "../../Utils/Interface";

const SocialHandles = ({ className }: any) => {
  const handleList: Array<SocialHandle> = [
    {
      name: "Github",
      logo: <FaGithubSquare />,
      link: "https://github.com/AryanshMahato",
    },
    {
      name: "LinkedIn",
      logo: <FaLinkedin />,
      link: "https://www.linkedin.com/in/aryansh-mahato-a4b33015a/",
    },
    {
      name: "Instagram",
      logo: <FaInstagram />,
      link: "https://www.instagram.com/aryanshmahato/",
    },
    {
      name: "Twitter",
      logo: <FaTwitterSquare />,
      link: "https://twitter.com/AryanshMahato",
    },
  ];

  const showHandle = () => {
    return handleList.map((properties) => (
      <li className={styles.socialHandle} key={properties.link}>
        <a href={properties.link} target={"_blank"} rel="noopener noreferrer">
          {properties.logo}
        </a>
      </li>
    ));
  };

  return (
    <ul className={styles.socialHandles + " " + className}>{showHandle()}</ul>
  );
};

export default SocialHandles;
