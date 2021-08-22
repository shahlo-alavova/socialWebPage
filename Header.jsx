import React from 'react';
import classes from "./Header.module.css";

function Header() {
    return (
        <header className={classes.header}>
            <img  className={classes.headerimage} src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"></img>
        </header>
        
    );
}
export default Header;