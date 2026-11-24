import axios from 'axios'
import { useAuthStore } from '../store/useAuthStore'
import { UseLanguageStore } from '../store/LanguageStore'

const AuthAxiosInstance=axios.create({
    baseURL: import.meta.env.VITE_BASEURL,
})

AuthAxiosInstance.interceptors.request.use((config)=>{
    const token = useAuthStore.getState().token;
    const language = UseLanguageStore.getState().language || "en";
    config.headers["Accept-Language"] = language;
    if(token){
        config.headers.Authorization=`Bearer ${token}`
    }

    return config
})


export default AuthAxiosInstance