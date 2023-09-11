import axios from "axios";
export const instance = axios.create({ baseURL: 'https://connections-api.herokuapp.com' });

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

export const logOut = async () => {
    await instance.post('/users/logout');
    deleteToken();
}

export const refreshUser = async () => {
    const token = localStorage.getItem('token');

    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
    const { data } = await instance.get('/users/current');
    setToken(token);
    return { token, user: { ...data } };
}

export const signUp = async (dataUserRegistration) => {
    const { data } = await instance.post('/users/signup', dataUserRegistration);
    setToken(data.token);
    return data;
}


