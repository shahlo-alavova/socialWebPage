import React from "react";
import classes from "./ProfileInfo.module.css"


const ProfileInfo = () =>{
    return(
        <div className = {classes.descriptionBlock}>
        <h1>My Profile</h1>
            <div><img className={classes.profileImage} src="https://thispersondoesnotexist.com/image"></img>
            </div>

            <div>Name: Shahlo Alavova</div>
            <div>Age:25</div>
            <div>City: Vancouver</div>
            </div>
    )
}

export default ProfileInfo;