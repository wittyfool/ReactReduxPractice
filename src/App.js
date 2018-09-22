import React, { Component } from 'react';
import logo from './logo.svg';
//
import { createStore } from 'redux';
//
import './App.css';



// const store = createStore(myReducer);

// ----------------------------
function myReducer(state, action){
  if(typeof(state) === 'undefined'){
    return { 'todos': [ { name: '000'}, { name: '111'} ]};
  }

  let newState = Object.assign({}, state);

  console.log("myReducer. action=" + action.type);

  if(action.type === 'ADD'){
    newState[ 'todos' ].push( { name: action.name });
  }

  console.log("newState=");
  console.log(newState);

  return newState;
}

function addTodo(){
  console.log("going to dispatch");
  document.store.dispatch({
	type: 'ADD',
	name: '1234'
	});
}
// ----------------------------

class Todo extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.name
    };
  }

  render(){
    return <div> Todo... {this.state.name} </div>;
  }
}

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: props.todos
    };
  }

  render(){
    return (
      <div>
	{this.state.todos.map( x =>
	  <Todo name={x.name} />
	)}
      </div>
    );

  }
}


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        { name: "AAA" },
        { name: "BBB" },
        { name: "CCC" }
      ]
    }
  }

// <TodoList todos={store.getState().todos} />

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

	<TodoList todos={this.state.todos} />
	<hr />
        <TodoList todos={document.store.getState().todos} />
	<div>
	  <input type="text"></input>
	  <button onClick={addTodo}> add </button>
	</div>

      </div>
    );
  }
}

export default App;
