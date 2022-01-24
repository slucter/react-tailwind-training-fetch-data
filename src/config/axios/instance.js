import axios from 'axios';
import axiosInstance from './config.js';
const Config = axiosInstance

let api1 = Config(
    axios.create({ 
        baseURL: 'https://staging-cuan.awalmula.co' 
    }))
let api2 = Config(
    axios.create({
        baseURL: 'https://api-dev.mydigilearn.id'
    }))

export { api1, api2 }