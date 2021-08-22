let rerenderEntireTree = () => {
  console.log('state changed');
}

let state = {

    profilePage: {
        posts:[
  {id: 1, post: "I love this city", likes: "100" },
  {id: 2, post: "Hello, where can I find nice coffee?", likes: "145" },
  {id: 3, post: "Hooray, I got a new job!", likes: "500" },
  {id: 4, post: "Hello, this is my first post", likes: "100" }
],
newPostText: 'Write a new post'
},
dialoguesPage:{
    messages:[
    {id:1, message: "Hello"},
    {id:2, message: "How is your work?"},
    {id:3, message: "Yo!"},
    {id:4, message: "Maybe today?"},
    {id:5, message: "Congratualtions!"},
    {id:6, message: "Wow! Cool!"}
  ],
    dialogues: [
    {id:1, name: "Roberto"},
    {id:2, name: "Maria"},
    {id:3, name: "Martha"},
    {id:4, name: "Luther"},
    {id:5, name: "Daniel"},
    {id:6, name: "Paula"}
  ]
},
sidebar:{
    friendsList:[
        {id:1, name: "Roberto"},
        {id:2, name: "Maria"},
        {id:3, name: "Martha"}
    ]
}
}

export const addPost = () =>{
let newPost= {
  id: 5,
  post: state.profilePage.newPostText,
  likes: 0
};
state.profilePage.posts.push(newPost);
state.profilePage.newPostText = '';
rerenderEntireTree(state);
}

export const changePost = (newPost) =>{
state.profilePage.newPostText = newPost;
rerenderEntireTree(state);
}
export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}
export default state;