import React from "react";
import classes from "./ProjectLink.module.scss";
import { FaEye } from "react-icons/fa";

interface LiveLinkProps {
  liveLink: string;
}

export default ({ liveLink }: LiveLinkProps) => {
  return (
    <a
      href={liveLink}
      className={classes.root}
      target={"_blank"}
      rel="noopener noreferrer"
    >
      <FaEye className={classes.icon} />
      Live Demo
    </a>
  );
};
