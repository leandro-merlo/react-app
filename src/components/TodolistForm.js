import React, { Component } from 'react'

export default class TodolistForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        }
    }

    onChange = (event) => {
        this.setState({ todo: event.target.value })
    }
    
    onAdd = (event) => {
        event.preventDefault();
        this.props.pushToItems(this.state.todo);
        this.setState({
            todo: ''
        })
    }


    render(){
        const { todo } = this.state;
        return(
            <div>
                <input type="text" name="todo" placeholder="Digite a tarefa a realizar aqui" onChange={ this.onChange } value={ todo }/>
                <button type="button" onClick={ this.onAdd }>Criar</button>
            </div>
        )
    }
}