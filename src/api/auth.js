import axios from "axios";
const instance = axios.create({ baseURL: 'https://connections-api.herokuapp.com' });

const setToken = (token) => {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
    localStorage.setItem('token', token);

}

const deleteToken = () => {
    localStorage.setItem('token', '');
    delete instance.defaults.headers.common['Authorization'];
}

export const login = async (dataUser) => {
    const { data } = await instance.post('/users/login', dataUser);
    setToken(data.token);

    return data;
}

export const logOut = async (token) => {
    const result = await instance.post('/users/logout');
    deleteToken(token);
    return result;
}

export const refreshUser = async (token) => {
    const result = await instance.get('/users/current');
    setToken(result.token);
    return result;
}

export const signUp = async (dataUserRegistration) => {
    const { data } = await instance.post('/users/signup', dataUserRegistration);
    setToken(data.token);
    return data;
}
