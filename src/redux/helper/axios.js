import axios from 'axios'
import store from '../store';
const token = localStorage.getItem('user_token');
const instance = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'Authorization': token ? `Bearer ${token}` : '',
    }
});

instance.interceptors.request.use((req) => {
    const { userAuth } = store.getState();
    if (userAuth.token) {
        req.headers.Authorization = `Bearer ${userAuth.token}`
    }
    return req
})
export default instance
