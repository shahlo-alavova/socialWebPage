import React from "react";
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

let Friends=(props)=>{
    return(
                <div >
                    <NavLink to={"/friends/" + props.id}>{props.name}</NavLink>
                    </div>
            );
        }
       export default Friends