import axios from "axios";

const PRODUCTS_SERVICE = axios.create({
    baseURL: 'http://localhost:5000/products'
});

export const getProducts = async (userAuthToken) => {
    return await PRODUCTS_SERVICE.get('',
    { headers: {"Authorization" : `Bearer ${userAuthToken}`} })
}