import React from "react";
import classes from "./Post.module.css"


const Post = (props) => {
    return (
            <div>
    <img src="https://thispersondoesnotexist.com/image"></img>
    <div>{props.post}</div>
    <div>Likes {props.likes}</div>
                </div> 
    );
}
export default Post;