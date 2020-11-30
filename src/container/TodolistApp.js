import React, { Component } from 'react'
import TodolistForm from './../components/TodolistForm'
import { Todolist } from './../components/Todolist'
import { ContainerApp } from './../components/ContainerApp'
import { getTodos } from './../components/API'

export default class TodolistApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    async componentDidMount(){
        const { data } = await getTodos();
        this.setState({ items: data });        
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
            <ContainerApp>
                <div className="col-sm-12">
                    <h2>Todo List</h2>
                </div>
                <div className="col-sm-12">
                    <TodolistForm pushToItems={this.pushToItems}/>
                </div>
                <div className="col-sm-12">
                    <hr/>
                    <Todolist items={items} removeFromItems={this.removeFromItems } />
                </div>
            </ContainerApp>
        );
    }
}