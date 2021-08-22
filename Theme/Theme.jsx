import React from "react";
import classes from "./Theme.module.css"
import wallpapaperproj from "../../../wallpapaperproj.png"
function Theme() {
  return (
    <div className={classes.theme}>
      <img className = {classes.themeImage} src={wallpapaperproj}></img>
  </div>
  );
}
export default Theme;