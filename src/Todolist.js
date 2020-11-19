import React, { Component } from 'react';

class Todolist extends Component{

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      todo: ''
    }
  }

  onChange = (event) => {
    this.setState({ todo: event.target.value })
  }

  pushToItems = (event) => {
    event.preventDefault();
    this.setState({ 
      items: [...this.state.items, this.state.todo ],
      todo: ''
    })
  }
  
  render() {
    const { items, todo } = this.state; 
    return (
      <div>
        <input type="text" name="todo" placeholder="Digite a tarefa a realizar aqui" onChange={ this.onChange } value={ todo }/>
        <button type="button" onClick={ this.pushToItems }>Criar</button>
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
