import React from "react";
import classes from "./Buttons.module.scss";

interface ReadMoreButtonProps {
  onClick: () => void;
}

export default ({ onClick }: ReadMoreButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classes.buttons + " " + classes.readMore}
    >
      Read More
    </button>
  );
};
