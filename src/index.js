import * as serviceWorker from './serviceWorker';
import store from './redux/store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
/*import state, { addMessage, 
		addPost, 
		updateNewMessageText, 
		updateNewPostText,
		subscribe } from './redux/state';
//import state from './redux/state';
//import { rerenderEntireTree } from './render';*/

let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>		
			<App state={state} 
			dispatch={store.dispatch.bind(store)} />
				{/*addPost={store.addPost.bind(store)} 
				addMessage={store.addMessage.bind(store)} 
				updateNewPostText={store.updateNewPostText.bind(store)}
				updateNewMessageText={store.updateNewMessageText.bind(store)}*/}
		</BrowserRouter>, document.getElementById('root')
	);
}
rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
