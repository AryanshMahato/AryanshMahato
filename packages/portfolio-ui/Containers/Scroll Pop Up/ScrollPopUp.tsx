import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import styles from "./ScrollPopUp.module.scss";

// Prop Types
interface ScrollPopUpProps {
  didScrolled: boolean;
}

// Export Function
const ScrollPopUp = ({ didScrolled }: ScrollPopUpProps) => {
  const [show, setShow] = useState(false);
  let classes = [styles.scrollPopUp];

  // set ShowPopUp After 5s
  setTimeout(() => setShow(true), 5000);

  if (didScrolled) {
    classes = [styles.scrollPopUp];
  }

  // If user haven't scrolled, and show is true, Popup will be shown
  if (show && !didScrolled) {
    classes = [styles.scrollPopUp, styles.show];
  }

  return (
    <a href="#about">
      <div className={classes.join(" ")}>
        Scroll <FaChevronDown />
      </div>
    </a>
  );
};

export default ScrollPopUp;
