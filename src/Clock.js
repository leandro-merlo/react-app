import React, { Component } from 'react'

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            date: new Date().toLocaleString('pt-BR', {
                minute: 'numeric',
                hour: 'numeric',
                second: 'numeric'
            })
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                date: new Date().toLocaleString('pt-BR', {
                    minute: 'numeric',
                    hour: 'numeric',
                    second: 'numeric'
                })
            })
        }, 1000);
    }

    render(){
        return (
            <h1>{ this.state.date }</h1>
        );
    }
}

export default Clock