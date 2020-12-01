import axios from 'axios'
import { api_url } from './../api'

const getTodos = () => {
    return axios.get('https://jsonplaceholder.typicode.com/todos');
}

const getWeatherInfo = ( query ) => {
    return axios.get(`${ api_url }&query=${query}`);
}

export {
    getTodos,
    getWeatherInfo
}