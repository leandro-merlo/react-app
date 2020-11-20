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

    render() {
        const { items } = this.state; 
        return (
            <div>
                <TodolistForm pushToItems={this.pushToItems}/>
                <Todolist items={items}/>
            </div>
        );
    }
}