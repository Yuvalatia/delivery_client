import axios from "axios";

const USER_SERVICE = axios.create({
    baseURL: 'http://localhost:5000/users'
});

export const userRegister = async (details) => {
    return await USER_SERVICE.put('/register',details);
}

export const userLogin = async (details) => {
    return await USER_SERVICE.post('/login', details);
}

export const getUserDetails = async (userAuthToken) => {
    return await USER_SERVICE.post('/details',null,
    { headers: {"Authorization" : `Bearer ${userAuthToken}`} })
}