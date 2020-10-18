import * as serviceWorker from './serviceWorker';
//import state from './redux/state';
//import { rerenderEntireTree } from './render';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import state, { addMessage, 
		addPost, 
		updateNewMessageText, 
		updateNewPostText,
		subscribe } from './redux/state';

let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={state} 
				addPost={addPost} 
				addMessage={addMessage} 
				updateNewPostText={updateNewPostText}
				updateNewMessageText={updateNewMessageText} />
		</BrowserRouter>, document.getElementById('root')
	);
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
