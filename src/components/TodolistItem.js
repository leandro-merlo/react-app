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
        <li key={this.props.index} id={"id" + this.props.index}>{this.props.item} <button type="button" onClick={this.onRemove}>X</button></li>
        )
    }
} 