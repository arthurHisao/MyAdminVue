import axios from "axios"
import Cookies from 'js-cookie'

const api = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8000/api'
})

const token =  Cookies.get('XSRF-TOKEN')

api.interceptors.request.use(
    config => {
        if (token) {
            config.headers['X-XSRF-TOKEN'] = token
        }

        config.headers['Content-Type'] = 'application/json';
        config.headers['withXSRFToken'] = true
        return config
    },
    error => {
        Promise.reject(error)
    }
)

export default api