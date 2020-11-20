import React, { Component } from 'react';
import TodolistForm  from './TodolistForm';

class Todolist extends Component{

  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  pushToItems = (event) => {
    event.preventDefault();
    this.setState({ 
      items: [...this.state.items, this.state.todo ],
      todo: ''
    })
  }
  
  render() {
    const { items } = this.state; 
    return (
      <div>
        <TodolistForm />
        <hr/>
        <ul>
          { items.map((item, index) => 
            <li key={index}>{item}</li>
          )}
        </ul>
      </div>
    );    
  }
}

export default Todolist;
