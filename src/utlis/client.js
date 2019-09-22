import axios from 'axios';

const baseURL = process.env.VUE_APP_API_URL;
const instanceAxios = axios.create({ baseURL });

export const fetchData = url => instanceAxios.get(`/${url}`);
export const addItem = (url, item) => instanceAxios.post(`/${url}`, item);
export const deleteItem = (url, id) => instanceAxios.delete(`/${url}/${id}`);
export const updateItem = (url, task, index) => instanceAxios.put(`/${url}/${index}`, task);
