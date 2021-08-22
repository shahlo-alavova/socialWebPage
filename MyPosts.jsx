import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    
   let postsItems = props.posts.map (p => <Post key = {p.id} post={p.post}  likes={p.likes} />);
   let newPostElement = React.createRef();
  
   let addPost = () => {
 props.addPost();
   }

   let onPostChange = () => {
       let text = newPostElement.current.value;
      props.changePost(text);
   }
return (
    <div>
    <div className={classes.FeedFormat}>
            <h3>My Feed</h3>
           <div><textarea onChange = {onPostChange} ref = {newPostElement} value = {props.newPost}/></div>
           <div><button onClick={addPost}>Add Post</button></div>  
    </div>
        <div className={classes.postsFeed}>
            <div className={classes.posts}>
                {postsItems}
                </div> 
    );
        </div>
    </div>

);
}
export default MyPosts;