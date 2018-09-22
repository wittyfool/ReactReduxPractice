import React from 'react';

//import ReactDOM from 'react-dom';
import { render } from 'react-dom';

import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import myReducer from './App';

//import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

const store = createStore(myReducer);

/***
export const addTodo = function (){
  console.log("going to dispatch");
  store.dispatch({
	type: 'ADD',
	name: '1234'
  });
};
***/

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
)
