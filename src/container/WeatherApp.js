import React, { Component } from 'react'
import { getWeatherInfo } from './../components/API'

export default class WeatherApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            weather: {}
        }
    }

    handleChangeInput = ( {target} ) => {
        const { name, value } = target;
        if ( value ) {
            this.setState({
                [name]: value
            });
        }
    }

    searchAPI = async () => {
        const { city } = this.state;
        const { data } = await getWeatherInfo( city );
        this.setState({
            weather: data
        })
    }

    render(){
        const { city, weather } = this.state;
        const { current } = weather; 
        return(
            <div>
                <input type="text" name='city' placeholder="Digite o nome da cidade a ser procurada..." value={ city } onChange={ this.handleChangeInput }/>
                <button type="button" onClick={ this.searchAPI }>Procurar</button>
                <hr/>
                <div className="whether-info">
                    <h1>{current && current.weather_descriptions[0] }</h1>
                    <img src={ current && current.weather_icons[0]} alt={current && current.weather_descriptions[0]}/>
                    <h3>{ current && current.temperature }</h3>
                </div>
            </div>
        );
    }
}