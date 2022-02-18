import React from "react";
import classes from "./Footer.module.scss";
import SocialHandles from "../../Components/Social Handles/SocialHandles";

export default () => {
  return (
    <div className={classes.root}>
      <h1 className={classes.annotation}>
        Designed and Developed By Aryansh Mahato
      </h1>
      <SocialHandles className={classes.socialHandles} />
    </div>
  );
};
