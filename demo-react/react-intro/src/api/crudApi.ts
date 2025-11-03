import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

export const demoCrudApi = {
    getUsers: () => axios.get(BASE_URL),
    getUserById: (id: number) => axios.get(`${BASE_URL}/${id}`),
    createUser: (user: { name: string; email: string; phone: string }) => axios.post(BASE_URL, user),
    updateUser: (id: number, user: { name: string; email: string; phone: string }) => axios.put(`${BASE_URL}/${id}`, user),
    deleteUser: (id: number) => axios.delete(`${BASE_URL}/${id}`)
};