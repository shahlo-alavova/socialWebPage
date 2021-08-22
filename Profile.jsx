import React from "react";
import classes from "./Profile.module.css"
import MyPosts from "./Posts/MyPosts.jsx"
import Theme from "./Theme/Theme.jsx"; 
import ProfileInfo from "./ProfileInfo";
import Post from "./Posts/Post/Post";


const Profile = (props) => {

    return (
        <div className={classes.myprofile}>
            <Theme />
            <ProfileInfo/>
             <MyPosts posts={props.state.posts} addPost={props.addPost} newPost={props.state.newPostText} changePost={props.changePost}/>
        </div>

    );
}
export default Profile;