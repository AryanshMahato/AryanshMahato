import React from "react";
import styles from "./Skills.module.scss";
import SkillsList from "../../Containers/Skills List/SkillsList";
import Heading from "../../Global/Heading/Heading";

export default function Skills() {
  return (
    <div className={styles.Skills} id={"skills"}>
      <Heading>Skills</Heading>
      <div className={styles.SkillsListContainer}>
        <SkillsList />
      </div>
    </div>
  );
}
