import axios from 'axios';

export const api = axios.create({
    // baseURL: 'http://jsonplaceholder.typicode.com'
    baseURL: 'http://localhost:3001'
})

export const get = async(url, setUsers) => {
    const response = await api.get(url);
    setUsers(response.data);
}