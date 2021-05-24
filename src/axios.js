import axios from 'axios';

const instance = axios.create({
    method: 'GET',
    baseURL:'https://restcountries.eu/rest/v2/',
    headers: {
        'content-type' : 'application/countries',

    }


});

export default instance;