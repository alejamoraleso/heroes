import axios from 'axios';

const baseURL = 'https://api-heroes-fimlm.herokuapp.com';

const heroesApi = axios.create({ baseURL });

export default heroesApi;