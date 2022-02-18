import React from "react";
import classes from "./About.module.scss";
import Heading from "../../Global/Heading/Heading";

export default () => {
  return (
    <div className={classes.root} id={"about"}>
      <Heading className={classes.annotation}>About Me</Heading>
      <div className={classes.aboutSection}>
        <p className={classes.about}>
          I am a <strong>MERN</strong> Developer with main expertise in Frontend
          with React.js
        </p>
        <p className={classes.about + " " + classes.mobileHide}>
          I have motivation of building new things in fast paced environment as
          well as patience of reading documentation and debugging for hours.
        </p>
        <p className={classes.about}>
          I mainly use JavaScript(<strong>TypeScript! </strong> To be Honest) on
          both Frontend and Backend and also little bit of magic of writing bug
          free and optimised code.
        </p>
        <p className={classes.about}>
          {
            "I can convert any Design into pixel perfect code and can also create complicated Backend Logic."
          }
        </p>
      </div>
    </div>
  );
};
