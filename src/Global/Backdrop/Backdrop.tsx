import React from "react";
import styles from "./Backdrop.module.scss";

interface BackdropProps {
  clicked?: () => void;
}

const Backdrop = ({ clicked }: BackdropProps) => {
  return <div className={styles.backdrop} onClick={clicked} />;
};

export default Backdrop;
