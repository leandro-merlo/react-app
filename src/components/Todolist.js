import React from 'react'
import TodolistItem from './TodolistItem'

export const Todolist = (props) => {
    
    const { items, removeFromItems } = props;

    return (
        <ul>
          { items.map((item, index) =>
            <TodolistItem item={item} index={index} key={index} removeFromItems={ removeFromItems }/>
          )}
        </ul>
    );
}