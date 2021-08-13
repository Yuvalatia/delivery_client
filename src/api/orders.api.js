import axios from "axios";

const ORDERS_SERVICE = axios.create({
    baseURL: 'http://localhost:5000/orders'
});

export const getUserOrders = async (userAuthToken) => {
    return await ORDERS_SERVICE.get('',
    { headers: {"Authorization" : `Bearer ${userAuthToken}`} })
};

export const setNewUserOrder = async (userAuthToken, products) => {
    return await ORDERS_SERVICE.put('', {products}, 
    { headers: {"Authorization" : `Bearer ${userAuthToken}`} });
}