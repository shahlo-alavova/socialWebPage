import React from "react";
import DialogueItem from "./DialogueItem";
import  classes from "./Dialogues.module.css";
import Messages from "./Messages";



const Dialogues = (props) => {
    
   
        let dialogueElements = props.state.dialogues.map(d => <DialogueItem key = {d.id} name = {d.name} id = {d.id} /> );
        let messageElements = props.state.messages.map(m => <Messages key = {m.id} message = {m.message} /> );
 return (   <div className={classes.dialoguesScreen}>
        <div className= {classes.dialogues}>
            {dialogueElements}
         </div>
        <div className = {classes.messages}>
    {messageElements}
        </div>
        </div>
    );
}
export default Dialogues