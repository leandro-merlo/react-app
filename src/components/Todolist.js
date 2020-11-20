import React from 'react'
import TodolistItem from './TodolistItem'

export const Todolist = (props) => {
    
    const { items } = this.props;

    return (
        <ul>
          { items.map((item, index) => 
            <TodolistItem item={item} key={index}/>
          )}
        </ul>
    );
}