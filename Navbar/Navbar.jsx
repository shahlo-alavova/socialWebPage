import React from "react";
import { NavLink } from "react-router-dom";
import Friends from "./Friends";
import classes from "./Navbar.module.css";


const Navbar = (props) => {
  // let friendsSidebar = props.friends.map(f => <Friends key = {f.id} idname={f.name}  />);
    return (
    <div className = {classes.navbar}>
       <div className={classes.item}>
         <NavLink to = "/profile" activeClassName = {classes.active}>My profile</NavLink>
       </div>
       <div className={classes.item}>
         <NavLink to = "/messages" activeClassName = {classes.active}>Messages</NavLink>
         </div>
       <div className={classes.item}>
         <NavLink to = "/photos" activeClassName = {classes.active}>Photos</NavLink>
       </div>
       <div className={classes.item}>
         <NavLink to = "/groups" activeClassName = {classes.active}>Groups</NavLink>
       </div>
       <div className={classes.item}> 
       <NavLink to = "/music" activeClassName = {classes.active}>Music</NavLink>
       </div>
       <div className={classes.item}> 
    <NavLink to = "/friends" activeClassName = {classes.active}>Friends</NavLink>
       </div>
    </div>
    );
}
export default Navbar;