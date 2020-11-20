import React, { Component } from 'react';

export default class TodolistItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: this.props.item,
            key: this.props.key
        }
    }

    render() {
        return (
        <li id={this.state.key}>{this.state.item}</li>
        )
    }
} 