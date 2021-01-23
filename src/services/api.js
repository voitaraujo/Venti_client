import axios from 'axios'

//cria uma instancia configurada do axios com endereço base da api, cors aberto etc..
export const api = axios.create({
        baseURL: `http://${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`,
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        proxy: {
          host: process.env.REACT_APP_API_URL,
          port: process.env.REACT_APP_API_PORT
        },
        crossDomain: true
      })


