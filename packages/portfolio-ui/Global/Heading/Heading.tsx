import React from "react";
import classes from "./Heading.module.scss";

interface HeadingProps {
  children: string;
  className?: string;
}

export default ({ children, className }: HeadingProps) => {
  return <h1 className={classes.annotation + " " + className}>{children}</h1>;
};
