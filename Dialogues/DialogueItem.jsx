import React from "react";
import  classes from "./DialogueItem.module.css";
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
const DialogueItem =(props)=> {
    return(
        <div className={classes.dialogueItem}>
            <NavLink to={"/dialogues/" + props.id}>{props.name}</NavLink>
            </div>
    );
}
export default DialogueItem;