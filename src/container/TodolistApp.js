import React, { Component } from 'react'
import TodolistForm from './../components/TodolistForm'
import { Todolist } from './../components/Todolist'

export default class TodolistApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    pushToItems = (todo) => {
        this.setState({ 
            items: [...this.state.items, todo],
        })
    }

    removeFromItems = (index) => {
        let { items } = this.state;
        items.splice(index, 1);
        console.log(items);
        this.setState( { items } );
    }

    render() {
        const { items } = this.state; 
        return (
            <div>
                <TodolistForm pushToItems={this.pushToItems}/>
                <Todolist items={items} removeFromItems={this.removeFromItems } />
            </div>
        );
    }
}