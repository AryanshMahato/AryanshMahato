import React from "react";
import classes from "./ProjectLink.module.scss";
import { FaGithubSquare } from "react-icons/fa";

interface GithubLinkProps {
  githubLink: string;
}

export default ({ githubLink }: GithubLinkProps) => {
  return (
    <a
      href={githubLink}
      className={classes.root}
      target={"_blank"}
      rel="noopener noreferrer"
    >
      <FaGithubSquare className={classes.icon} />
      <p>Source Code</p>
    </a>
  );
};
