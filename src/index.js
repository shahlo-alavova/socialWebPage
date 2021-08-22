import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { addPost, changePost } from './redux/state';
import state from './redux/state';
import {subscribe} from './redux/state'



let rerenderEntireTree = (state) => {
    ReactDOM.render (
        <BrowserRouter>
        <App state={state} addPost={addPost} changePost={changePost}></App>
        </BrowserRouter>, document.getElementById('root'));
    }
    rerenderEntireTree(state);
    subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
