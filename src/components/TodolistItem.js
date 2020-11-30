import React, { Component } from 'react';

export default class TodolistItem extends Component {

    constructor(props) {
        super(props);
    }

    onRemove = () => {
        this.props.removeFromItems(this.props.index)
    }
    
    render() {
        return (
        <li key={this.props.index} className="list-group-item" id={"id" + this.props.item.id}>{this.props.item.title} <button  type="button" className='btn btn-sm btn-danger' onClick={this.onRemove}>X</button></li>
        )
    }
} 