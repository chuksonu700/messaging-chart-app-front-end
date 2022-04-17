import axios from 'axios';

const instance = axios.create({
    baseURL:'https://messaging-chart-app-back-end.herokuapp.com/'
})

export default instance;