const axios = require('axios');


// const baseUrl = 'https://appi-burger-queen-client.herokuapp.com/products'
// const baseUrl = 'https://burguer-api.herokuapp.com/products'
const baseUrl = 'http://localhost:3001/products'

export const getProducts = async (token) => {
    const resp = await axios({
        method: 'get',
        url: baseUrl,
        headers: {
            Authorization: `Bearer ${token}`,
        }
      });
    return resp;
}

export const getProductId = async (productId, token) => {
    const server = `${baseUrl}/${productId}`;
    const resp = await axios({
        method: 'get',
        url: server,
        headers: {
            Authorization: `Bearer ${token}`,
        }
      });
    return resp;
}

export const putProducts = async (token) => {
    const resp = await axios({
        method: 'put',
        url: baseUrl,
        headers: {
            Authorization: `Bearer ${token}`,
        }
      });
    return resp;
}

export const postProducts = async (token, product) => {
    const resp = await axios({
        method: 'post',
        url: baseUrl,
        data: JSON.stringify(product),
        headers: {
            Authorization: `Bearer ${token}`,
        }
      });
    return resp;
}




