import React from "react";
import styles from "./SkillsList.module.scss";
import Skills from "../../Data/Skills";

export default function SkillsList() {
  return (
    <div className={styles.SkillsList}>
      {Skills.map((skill) => (
        <div key={skill.name} className={styles.skill}>
          <img src={skill.image} alt={skill.name} className={styles.image} />
          <h1 className={styles.name}>{skill.name}</h1>
        </div>
      ))}
    </div>
  );
}
